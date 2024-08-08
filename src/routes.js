import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,  // App is the parent component for all routes
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",  // Home is a nested route under App
        element: <Home />,
        children: [
          {
            path: "profile/:id",  // UserProfile is a nested route under Home
            element: <UserProfile />
          }
        ]
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
];

export default routes;
