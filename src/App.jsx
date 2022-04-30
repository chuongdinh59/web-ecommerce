import PrivateRouter, { PrivateRouterOutlet } from "components/PrivateRouter";
import ProductDetail from "components/ProductDetail";
import MainLayout from "layout/MainLayout";
import AuthPage from "pages/Auth";
import AddressList from "pages/Auth/AddressList";
import MyOrder from "pages/Auth/MyOrder";
import Profile from "pages/Auth/Profile";
import UpdateInfo from "pages/Auth/UpdateInfo";
import WishList from "pages/Auth/WishList";
import Category from "pages/Category";
import CheckOut from "pages/Checkout";
import Home from "pages/Home";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import store from "store";
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/* <ScrollToTop> */}
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Category />} />
              <Route path="/:slug" element={<ProductDetail />} />
            </Route>
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/cart"
              element={
                <PrivateRouter>
                  <CheckOut />
                </PrivateRouter>
              }
            />

            <Route path="/profile" element={<Profile />}>
              <Route index element={<UpdateInfo />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="address" element={<AddressList />} />
              <Route path="order" element={<MyOrder />} />
            </Route>
          </Routes>
          {/* </ScrollToTop> */}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
