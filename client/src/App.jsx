import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import DashBoard from "./pages/Users/DashBoard";
import MyTask from "./pages/Users/MyTask";
import ViewDetails from "./pages/Users/ViewDetails";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dasboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/creat-task" element={<CreateTask />} />
            <Route path="'/admin/user" element={<ManageUsers />} />
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dasboard" element={<DashBoard />} />
            <Route path="/user/tasks" element={<MyTask />} />
            <Route path="/user/task-details/:id" element={<ViewDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
