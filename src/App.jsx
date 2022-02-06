import MainLayout from "layout/MainLayout";
import AuthPage from "pages/Auth";
import UpdateInfo from "pages/Auth/UpdateInfo";
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
            </Route>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/update" element={<UpdateInfo />} />
          </Routes>
          {/* </ScrollToTop> */}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
