import { SET_PRODUCT } from "constant";
import { SET_CATEGORY } from "constant";
import { LOADING_PRODUCT } from "constant";

let initialValue = {
//   product: JSON.parse(localStorage.getItem("localProduct")) || [],
  paging: "",
  loading: true,
//   categories: JSON.parse(localStorage.getItem("categories")) || [],
  wishlist: [],
  productDetail: {},
  dataSearch: {},
};

const productReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LOADING_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_PRODUCT:
            return {
                ...state,
                loading: false,
                productlist: action.payload.data,
                paginate: action.payload.paginate
            }
        default: 
            
            return {
                ...state
            }
    }
}


export default productReducer