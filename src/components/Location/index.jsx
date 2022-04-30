import Filter from "components/Filter";
import HelperText from "components/HelperText";
import React, { useEffect, useState } from "react";
import "./style.scss";

const Location = ({ location, setLocation, defaultValue, defaultChoose }) => {
  const [city, setCity] = useState();
  const [districts, setDistricts] = useState();
  const [ward, setWard] = useState();
  const fetchLocation = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/?depth=3").then(
      (res) => res.json()
    );
    setCity(res);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const handle = (e, detail) => {
    switch (detail) {
      case "city":
        if (e.currentTarget.value) {
          setLocation({ city: e.currentTarget.value });
          const findItem = city.find(
            (item) => item.name === e.currentTarget.value
          ).districts;
          setDistricts(findItem);
        }
        break;
      case "districts":
        setLocation({
          ...location,
          district: e.currentTarget.value,
        });
        const findItem = districts.find(
          (item) => item.name === e.currentTarget.value
        )?.wards;
        setWard(findItem);
        break;
      default:
        setLocation({
          ...location,
          ward: e.currentTarget.value,
        });
        break;
    }

    console.log(location);
    // if (detail === "city") {
    //   if (e.currentTarget.value) {
    //     setLocation({ city: e.currentTarget.value });
    //     const findItem = city.find(
    //       (item) => item.name === e.currentTarget.value
    //     ).districts;
    //     setDistricts(findItem);
    //   }
    // } else if (detail === "districts") {
    //   setLocation({
    //     ...location,
    //     district: e.currentTarget.value,
    //   });
    //   const findItem = districts.find(
    //     (item) => item.name === e.currentTarget.value
    //   )?.wards;
    //   setWard(findItem);
    // } else {
    //   setLocation({
    //     ...location,
    //     ward: e.currentTarget.value,
    //   });
    // }
  };

  return (
    <div className="location">
      <div className="location-item">
        <span className="text">Tỉnh/Thành Phố:</span>
        <select onChange={(e) => handle(e, "city")}>
          <option>
            {defaultValue?.province ? defaultValue?.province : "Thành Phố"}
          </option>
          {city?.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="location-item">
        <span className="text">Quận/Huyện:</span>
        <select
          defaultValue="Quận huyện"
          onChange={(e) => handle(e, "districts")}
        >
          <option>
            {defaultValue?.district ? defaultValue.district : "Quận/Huyện"}
          </option>
          {districts &&
            districts?.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="location-item">
        <span className="text">Phường/Xã:</span>
        <select onChange={(e) => handle(e, "wards")}>
          <option>
            {defaultValue?.address ? defaultValue?.address : "Phường/Xã"}
          </option>
          {ward &&
            ward?.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="location-item">
        <span className="text">Địa chỉ:</span>
        <HelperText
          placeholder={
            !!defaultValue?.adddress ? defaultValue.adddress : "Địa chỉ"
          }
          value={location?.address || ""}
          onChange={(e) =>
            setLocation({
              ...location,
              address: e.currentTarget.value,
            })
          }
        />
      </div>
      {!defaultChoose && (
        <div className="location-item">
          <span className="text"></span>
          <label>
            <Filter
              type="text"
              field="Bạn có muốn đặt địa chỉ này làm địa chỉ mặc định"
              onChange={(e) =>
                setLocation({
                  ...location,
                  default: e.currentTarget.checked || false,
                })
              }
            />
          </label>
        </div>
      )}
    </div>
  );
};
export default Location;
