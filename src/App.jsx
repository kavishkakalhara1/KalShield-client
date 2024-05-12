import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import React, { Suspense } from "react";
import AnimatedRoutes from "./components/Animatedroutes";

export default function App() {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Routes>
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          {/* Add admin routes here if needed */}
        </Route>
        {/* Define a catch-all route for 404 errors */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
