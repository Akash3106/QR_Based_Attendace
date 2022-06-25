import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Attendance from "./admin/Attendance";
import StudentAttendances from "./admin/StudentAttendances";
import FormAttendance from "./admin/FormAttendance";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/Qrcode" exact component={Attendance} />
        <AdminRoute path="/admin/attendances" exact component={StudentAttendances} />
        <AdminRoute path="admin/category/update/:cateId"
        exact
        component={UpdateCategory}/>
      </Switch>
      <PrivateRoute path="/admin/Qrcode/create" component={FormAttendance}/>
    </Router>
  );
}
