import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");
    if (condition) {
      if (!condition.compareValue) {
        // reset documents data
        setDocuments([]);
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubscribe =
      condition.compareValue > 0 &&
      collectionRef.onSnapshot((snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocuments(documents);
      });

    return unsubscribe;
  }, [collection, condition]);

  return documents;
};

export default useFirestore;
