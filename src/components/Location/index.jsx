import React, { useEffect } from "react";
import { useState } from "react";
import "./style.scss";
function Location(props) {
  const [location, setLocation] = useState();
  const [districts, setDistricts] = useState();
  const [ward, setWard] = useState();
  const fetchLocation = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/?depth=3").then(
      (res) => res.json()
    );
    setLocation(res);
  };
  useEffect(() => {
    fetchLocation();
  }, []);
  const handle = (e, detail) => {
    if (detail === "district") {
      const findItem = location.find(
        (item) => item.name === e.currentTarget.value
      ).districts;
      setDistricts(findItem);
    } else {
      const findItem = districts.find(
        (item) => item.name === e.currentTarget.value
      ).wards;
      setWard(findItem);
    }
  };
  return (
    <div className="location">
      <select onChange={(e) => handle(e, "district")} defaultValue="Thành Phố">
        <option>Thành phố</option>
        {location?.map((item) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
      <select defaultValue="Quận huyện" onChange={(e) => handle(e, "ward")}>
        <option>Quận huyện</option>

        {districts &&
          districts?.map((item) => {
            return <option value={item.name}>{item.name}</option>;
          })}
      </select>
      <select>
        <option>Xã</option>
        {ward &&
          ward?.map((item) => {
            return <option value={item.name}>{item.name}</option>;
          })}
      </select>
    </div>
  );
}
export default Location;
