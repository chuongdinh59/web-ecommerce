import { API } from "constant";
import callApiWithToken from "utils/callApiWishToken"


const cartService =  {
    quatity(data) {
        const item = data.listCart.find(item => item.id === data.currentCart)
        return callApiWithToken(`${API}/ecommerce/v1/cart/quantity/${data.currentCart}`, {
            method: 'PUT',
            body: JSON.stringify({quantity: item?.number})
        })
    },
    getCart() {
        return callApiWithToken(`${API}/ecommerce/v1/cart`)
    },
    removeCart(id) {
        return callApiWithToken(`${API}/ecommerce/v1/cart/remove-item/${id}`, {
            method: "DELETE"
        })
    }
    
}


export default cartService