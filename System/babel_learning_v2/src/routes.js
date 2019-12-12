import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, LoginLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Login from "./views/login";

export default [
  {
    path: "/",
    exact: true,
    layout: LoginLayout,
    component: Login
  },
  {
    path: "/homepage",
    layout: DefaultLayout,
    component: <Redirect to="/homepage" />
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/forum",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/courses",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/materials",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/homepage",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
