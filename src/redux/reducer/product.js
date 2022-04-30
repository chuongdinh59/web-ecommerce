import { SET_PRODUCT } from "constant";
import { LIST_VIEW } from "constant";
import { SET_MODAL_PRODUCT } from "constant";
import { SET_PRODUCT_DETAIL } from "constant";
import { GRID_VIEW } from "constant";
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
        case GRID_VIEW:
            return {
                ...state,
                view: 'grid'
            }
        case LIST_VIEW:
            return {
                ...state,
                view: "list"
            }
        case SET_PRODUCT_DETAIL:
            return {
                ...state,
                loading: false,
                productDetail: action.payload?.data
            }
       
        default: 
            
            return {
                ...state
            }
    }
}


export default productReducer