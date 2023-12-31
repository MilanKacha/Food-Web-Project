import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInUserAsync, selectLoggedInUser } from "./features/auth/authSlice";
import { useEffect, useState } from "react";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { fetchAllProductAsync } from "./features/delivery/RestorantSlice";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import LayOut from "./ui/LayOut";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import Protected from "./features/auth/component/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrderPage from "./pages/MyOrderPage";
import Loader from "./ui/Loader";
import ErrorPage from "./ui/ErrorPage";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectLoggedInUser);
  // console.log(user);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(logInUserAsync());
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
    }
    dispatch(fetchAllProductAsync());
  }, [dispatch, user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "restaurant",
          element: (
            <Protected>
              <RestaurantPage />
            </Protected>
          ),
        },
        {
          path: "restaurant/:id",
          element: (
            <Protected>
              <RestaurantDetailsPage />
            </Protected>
          ),
        },
        {
          path: "cart",
          element: (
            <Protected>
              <CartPage />
            </Protected>
          ),
        },
        {
          path: "checkout",
          element: (
            <Protected>
              <CheckOutPage />
            </Protected>
          ),
        },
        {
          path: "user",
          element: (
            <Protected>
              <UserDetailsPage />
            </Protected>
          ),
        },
        {
          path: "ordersuccess",
          element: (
            <Protected>
              <OrderSuccessPage />
            </Protected>
          ),
        },
        {
          path: "myorder",
          element: (
            <Protected>
              <MyOrderPage />
            </Protected>
          ),
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <RouterProvider router={router}></RouterProvider>
        </>
      )}
    </>
  );
}

export default App;
