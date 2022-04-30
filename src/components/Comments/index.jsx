import { Send, User } from "components/Icon";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import addDocument from "utils/addDocument";
import useFirestore from "../../hooks/useFirestore";
import "./style.scss";

function Comment(props) {
  const [value, setValue] = useState("");
  const { user } = useSelector((store) => store.user);
  const { productDetail } = useSelector((store) => store.product);
  const navigate = useNavigate();
  const conditionComment = useMemo(() => {
    return {
      fieldName: "productId",
      operator: "==",
      compareValue: productDetail?.[0]?.id,
    };
  }, [productDetail?.[0]?.id]);
  const comments = useFirestore("commentsProduct", conditionComment);

  // console.log(comments);
  const handleAddComment = () => {
    addDocument("commentsProduct", {
      text: value,
      id: user?.id,
      productId: productDetail[0]?.id,
      displayName: user?.name,
      photoURL: user?.avatar,
    });
    setValue("");
  };

  return (
    <div className="comments">
      <div className="comments-list">
        {comments?.map((i) => {
          return (
            <div className="comments-item" key={i.id}>
              <img src={i.photoURL} alt="" />
              <span>{i.displayName + ": " + i.text}</span>
            </div>
          );
        })}
      </div>
      {user ? (
        <div className="comments-bar">
          <input
            type="text"
            placeholder="Để lại bình luận"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                handleAddComment();
              }
            }}
          />
          <span onClick={handleAddComment}>
            <Send />
          </span>
        </div>
      ) : (
        <div className="notify" onClick={() => navigate("/login")}>
          <span> Đăng nhập để bình luận</span>
          <User />
        </div>
      )}
    </div>
  );
}

export default Comment;
