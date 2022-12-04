import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contact from "./pages/Contact";
import RedeemPoints from "./pages/RedeemPoints";
import PoinAddress from "./pages/PointAddress";
import ExchangePoint from "./pages/ExchangePoint";
import Product from "./pages/Product";
import TelecomOffersDetail from "./pages/TelecomOffersDetail";
import Login from "./pages/Login";
import Pointdetail from "./pages/Point-detail";
import Productdetail from "./pages/Product-detail";
import Userprofile from "./pages/Userprofile";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import Buyed from "./pages/Buyed";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gioi-thieu",
      element: <Introduction />,
    },
    {
      path: "/lien-he",
      element: <Contact />,
    },
    {
      path: "/doi-diem",
      element: <ExchangePoint />
    },
    {
      path: "/cach-thuc-doi-diem",
      element: < RedeemPoints />,
    },
    {
      path: "/dia-diem-doi-diem",
      element: < PoinAddress />,
    },

    {
      path: "/dang-nhap",
      element: <Login />
    },

    {
      path: "/san-pham",
      element: <Product />
    },
    {
      path: "/uu-dai-vien-thong",
      element: <TelecomOffersDetail />
    },
    {
      path: "/chi-tiet-doi-diem",
      element: <Pointdetail />
    },
    {
      path: "/chi-tiet-san-pham",
      element: <Productdetail />
    },
    {
      path: "/:id",
      element: <Productdetail />
    },
    {
      path: "/nguoi-dung",
      element: <Userprofile />
    },
    {
      path: "/gio-hang",
      element: <Cart />
    },
    {
      path: "/lich-su",
      element: <Buyed />
    },
    {
      path: "/dat-hang",
      element: <Checkout />
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
