import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
//import BlogOverview from "./BlogOverview";
import UserProfileLite from "./UserProfileLite";
import AddNewPost from "./AddNewPost";
import Errors from "./Errors";
import ComponentsOverview from "./ComponentsOverview";
import Tables from "./Tables";
import BlogPosts from "./BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/homepage" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/forum",
    layout: DefaultLayout,
    component: UserProfileLite
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
