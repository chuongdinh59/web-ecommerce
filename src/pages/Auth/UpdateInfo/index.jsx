import DatePicker from "components/DatePicker";
import HelperText from "components/HelperText";
import { useForm } from "hooks/useForm";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInfoAction } from "redux/actions/user";
import "./style.scss";
function UpdateInfo(props) {
  const updateRef = useRef();
  const { user } = useSelector((store) => store.user);
  const [sex, setSex] = useState(user?.gender);

  const birthday = user?.birthday?.split("-");
  const dispatch = useDispatch();

  useEffect(() => {
    setSex(user?.gender);
  }, [user?.gender]);
  useEffect(() => {
    const timeId = setTimeout(() => {
      updateRef.current.classList.add("active");
    }, 200);
    return () => clearTimeout(timeId);
  }, []);
  const { form, register } = useForm();
  const [date, setDate] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    (Object.keys(form).length > 0 ||
      sex !== user?.gender ||
      Object.keys(date).length > 0) &&
      dispatch(
        updateInfoAction({
          // ...user,
          ...form,
          gender: sex,
          birthday:
            date?.day || date?.month || date.year
              ? `${date?.day || birthday?.[0]}-${
                  date?.month || birthday?.[1]
                }-${date?.year || birthday?.[2]}`
              : user?.birthday,
        })
      );
  };

  const gender = [
    {
      eng: "male",
      vn: "Nam",
    },
    {
      eng: "female",
      vn: "Nữ",
    },
    {
      eng: "other",
      vn: "Khác",
    },
  ];
  return (
    <>
      <section className=" update-wrapper" ref={updateRef}>
        <div className="update-container ">
          <form className="update " onSubmit={handleSubmit}>
            <div className="update-item">
              <span className="title">Họ tên</span>
              <HelperText
                placeholder={`${user?.name || "Nhập họ tên"} `}
                register={register("name", { required: false })}
              />
            </div>
            <div className="update-item">
              <span className="title">Điện thoại di động</span>
              <HelperText
                placeholder={`${user?.phone || "Nhập số điện thoại"}`}
                register={register("phone", { required: false })}
              />
            </div>
            <div className="update-item">
              <span className="title">Email</span>
              <HelperText
                placeholder={`${user?.email || "Email"}`}
                register={register("email", { required: false })}
              />
            </div>
            <div className="update-item">
              <span className="title">Ngày sinh</span>
              <DatePicker date={date} setDate={setDate} />
            </div>
            <div className="update-item">
              <span className="title">Giới tính </span>
              <div className="gender">
                {gender?.map((item, index) => {
                  return (
                    <span
                      className={`gender pointer ${
                        item.eng === sex ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => setSex(item.eng)}
                    >
                      {item.vn}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="update-form__btn">
              <button onClick={handleSubmit}>Cập nhật</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateInfo;
