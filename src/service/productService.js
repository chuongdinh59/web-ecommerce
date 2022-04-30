const { API } = require("constant");

const productService = {
  category() {
    return fetch(`${API}/categories`).then((res) => res.json());
  },
  product(filter = "page=1") {
    return fetch(`${API}/product/${filter}`).then((res) => res.json());
  },
  productDetail(slug) {
    return fetch(`${API}/product?slug=${slug}`, {
      // headers: {
      //     'Content-Type': 'application/json',
      //     slug: slug
      // }
    }).then((res) => res.json());
  },
};

export default productService;
