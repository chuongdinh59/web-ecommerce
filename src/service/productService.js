
const { API } = require("constant")


const productService = {
    category() {
        return fetch(`${API}/categories`).then(res => res.json())
    },
    product(filter = "page=1") {
        return fetch(`${API}/product/${filter}`).then(res => res.json())
    }
}


export default productService