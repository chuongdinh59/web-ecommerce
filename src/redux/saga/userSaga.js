import { ADD_ADDRESS, EDIT_ADDRESS } from "constant";
import { ADD_WISHLIST } from "constant";
import { REMOVE_WISHLIST } from "constant";
import { DELETE_ADDRESS } from "constant";
import { call, put } from "redux-saga/effects";
import { fetchCartAction } from "redux/actions/cart";
import {
  getWishListAction,
  setAddressToShipAction,
  setWishListAction,
} from "redux/actions/user";
import {
  errorLoginAction,
  errorRegisterAction,
  fetchUserAction,
  getAddressAction,
  registerAction,
  setAddressAction,
  setLoadingAction,
  setUserAction,
} from "redux/actions/user";
import authService from "service/authService";
import userService from "service/userService";

export function* fetchLogin(data) {
  const token = yield call(authService.login, data.payload);
  if (token?.error) {
    yield put(errorLoginAction(token?.error));
  } else {
    localStorage.setItem("token", JSON.stringify(token.data));
    yield put(setLoadingAction(true));
    yield put(fetchUserAction());
    yield put(fetchCartAction());
    yield put(getAddressAction());
    yield put(getWishListAction());
  }
}

export function* fetchUser() {
  try {
    const dataUser = yield call(userService.getUser);
    yield put(setUserAction(dataUser.data));
    yield put(setLoadingAction(false));
  } catch (error) {}
}

export function* fetchRegister(data) {
  yield put(setLoadingAction(true));
  const res = yield call(authService.register, data.payload);
  if (res?.error) {
    yield put(errorRegisterAction(res?.error));
  } else {
    yield put(registerAction());
  }
}

export function* fetchUpdateInfo(data) {
  yield call(userService.update, data.payload);
  yield put(fetchUserAction());
}

export function* getAllAddress() {
  const res = yield call(userService.getAddress);
  // yield put(setAddressAction(res))
  localStorage.setItem("address_list", JSON.stringify(res.data));
  yield put(setAddressAction());
}

export function* getWishList() {
  const res = yield call(userService.getWishList);
  let wish_list = [];
  res.data.forEach((item) => wish_list.push(item.product));
  localStorage.setItem("wish_list", JSON.stringify(wish_list));
  yield put(setWishListAction(res));
}
export function* updateWishList(action) {
  if (action.type === REMOVE_WISHLIST) {
    yield call(userService.deleteWishList, action.payload);
    return;
  }
  const findIndex = action.payload.wishlist.findIndex(
    (item) => item?._id === action.payload.item._id
  );
  if (action.type === ADD_WISHLIST && findIndex === -1) {
    yield call(userService.addWishList, action.payload.item._id);
  }
}

export function* fetchUpdateAddress(action) {
  const address_list = JSON.parse(localStorage.getItem("address_list")) || [];
  const obj = {
    province: action.payload.city,
    district: action.payload.district,
    address: action.payload.ward,
    adddress: action.payload.address,
    default: address_list.length === 0 ? true : action.payload.default,
  };
  switch (action.type) {
    case DELETE_ADDRESS:
      yield call(userService.deleteAddress, action.payload._id);
      break;
    case ADD_ADDRESS:
      const res = yield call(userService.updateAddress, obj);
      address_list.push(res.data);
      localStorage.setItem("address_list", JSON.stringify(address_list));
      yield put(setAddressAction());
      break;
    case EDIT_ADDRESS:
      {
        const address_list =
          JSON.parse(localStorage.getItem("address_list")) || [];
        const findex2 = address_list.findIndex(
          (i) => i._id === action.payload.id
        );
        if (action.payload.default) {
          //set lại
          const findIndex = address_list.findIndex((i) => i?.default);
          if (findIndex !== -1) {
            address_list[findIndex].default = false;
          }
          address_list[findex2].default = true;
          // localStorage.setItem("address_list", JSON.stringify(address_list));
        }
        address_list[findex2].province = action.payload.location?.city;
        address_list[findex2].district = action.payload.location?.district;
        address_list[findex2].address = action.payload.location?.ward;
        address_list[findex2].adddress = action.payload.location?.address;
        localStorage.setItem("address_list", JSON.stringify(address_list));
        yield put(setAddressAction());

        // call API EDIT ADDRESS
        yield call(userService.editAddress, {
          id: address_list[findex2]._id,
          default: address_list.length === 1 ? true : action.payload.default,
          data: {
            province: action.payload.location?.city,
            district: action.payload.location?.district,
            address: action.payload.location?.ward,
            adddress: action.payload.location?.address,
          },
        });
      }

      break;
    default:
      break;
  }
  // if (action.type === DELETE_ADDRESS) {
  //   yield call(userService.deleteAddress, action.payload._id);
  //   return;
  // }
  // yield put(setLoadingAction(true));

  // const res = yield call(userService.updateAddress, obj);
  // address_list.push(res.data);
  // localStorage.setItem("address_list", JSON.stringify(address_list));
  // yield put(setAddressAction());
  // if (action.payload.default) {
  //   const findIndex = address_list.findIndex((item) => item.default === true);
  //   if (findIndex !== -1) {
  //     address_list[findIndex].default = false;
  //     yield call(userService.editAddress, {
  //       id: address_list[findIndex]._id,
  //       default: false,
  //     });
  //   }
  //   address_list.forEach((i) => {
  //     i.id === action.payload?.id ? (i.default = true) : (i.default = false);
  //   });
  //   localStorage.setItem(JSON.stringify(address_list));
  //   yield call(userService.editAddress, {
  //     id: action?.payload?.id,
  //     default: true,
  //   });
  //   return;
  // }
  // if (action.type === EDIT_ADDRESS) {
  //   const findIndex = address_list.findIndex(
  //     (item) => item._id === action.payload.id
  //   );
  //   address_list[findIndex].province = action.payload.location?.city;
  //   address_list[findIndex].district = action.payload.location?.district;
  //   address_list[findIndex].address = action.payload.location?.ward;
  //   address_list[findIndex].default =
  //     address_list.length === 1 ? true : action.payload.default;
  //   address_list[findIndex].adddress = action.payload.location?.address;
  //   localStorage.setItem("address_list", JSON.stringify(address_list));
  //   yield call(userService.editAddress, {
  //     id: address_list[findIndex]._id,
  //     default: address_list.length === 1 ? true : action.payload.default,
  //     data: {
  //       province: action.payload.location?.city,
  //       district: action.payload.location?.district,
  //       address: action.payload.location?.ward,
  //       adddress: action.payload.location?.address,
  //     },
  //   });
  //   yield put(setAddressAction());
  //   return;
  // }

  yield put(setAddressToShipAction());
}
