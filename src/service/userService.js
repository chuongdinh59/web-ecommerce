import { API } from "constant";
import callApiWithToken from "utils/callApiWishToken";

const userService = {
  getUser() {
    return callApiWithToken(`${API}/user/get-info`);
  },
  update(data) {
    return callApiWithToken(`${API}/user/update`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  updateAddress(data) {
    return callApiWithToken(`${API}/ecommerce/v1/profile/address`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  getAddress() {
    return callApiWithToken(`${API}/ecommerce/v1/profile/address`);
  },
  getAddressDefault() {
    return callApiWithToken(`${API}/ecommerce/v1/profile/address/default`);
  },
  editAddress(data) {
    return callApiWithToken(`${API}/ecommerce/v1/profile/address/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({
        default: data.default,
        ...data.data,
      }),
    });
  },
  deleteAddress(id) {
    return callApiWithToken(`${API}/ecommerce/v1/profile/address/${id}`, {
      method: "DELETE",
    });
  },
  getWishList() {
    return callApiWithToken(`${API}/ecommerce/v1/profile/wishlist`);
  },
  deleteWishList(id) {
    return callApiWithToken(`${API}/ecommerce/v1/profile/wishlist/${id}`, {
      method: "DELETE",
    });
  },
  addWishList(id) {
    return callApiWithToken(`${API}/ecommerce/v1/profile/wishlist/${id}`, {
      method: "POST",
    });
  },
};

export default userService;
