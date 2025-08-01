import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout,Login } from "./Components/index.js";

import Addpost from './pages/AddPost'
import Signup from "./pages/Signup";
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"
import AllPost from "./pages/AllPost.jsx"
import Feture from './pages/Feture.jsx';
import Help from './pages/Help.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Support from './pages/Support.jsx';
import Termcondition from './pages/Termcondition.jsx';
import Privicypolicy from './pages/Privicypolicy.jsx';
import Licience from './pages/Licience.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPost/>
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <Addpost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/feture",
        element: (
            <Feture />
          
        ),
      },
       {
        path: "/help",
        element: (
            <Help />
          
        ),
      },
       {
        path: "/contact-us",
        element: (
            <ContactUs />
          
        ),
      },
       {
        path: "/support",
        element: (
            <Support />
          
        ),
      },
      {
        path: "/termcondition",
        element: (
           <Termcondition/>
          
        ),
      },
       {
        path: "/privicy-policy",
        element: (
           <Privicypolicy/>
          
        ),
      },
       {
        path: "/licience",
        element: (
           <Licience/>
          
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
