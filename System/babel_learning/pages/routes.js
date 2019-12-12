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
    component: () => <Redirect to="/blog-overview" />
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
    path: "/add-new-post",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
