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
        <span className="text">T???nh/Th??nh Ph???:</span>
        <select onChange={(e) => handle(e, "city")}>
          <option>
            {defaultValue?.province ? defaultValue?.province : "Th??nh Ph???"}
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
        <span className="text">Qu???n/Huy???n:</span>
        <select
          defaultValue="Qu???n huy???n"
          onChange={(e) => handle(e, "districts")}
        >
          <option>
            {defaultValue?.district ? defaultValue.district : "Qu???n/Huy???n"}
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
        <span className="text">Ph?????ng/X??:</span>
        <select onChange={(e) => handle(e, "wards")}>
          <option>
            {defaultValue?.address ? defaultValue?.address : "Ph?????ng/X??"}
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
        <span className="text">?????a ch???:</span>
        <HelperText
          placeholder={
            !!defaultValue?.adddress ? defaultValue.adddress : "?????a ch???"
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
              field="B???n c?? mu???n ?????t ?????a ch??? n??y l??m ?????a ch??? m???c ?????nh"
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
