import React, { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"; // BrowserRouter,Routes,HashRouter, MemoryRouter
import "toastr/build/toastr.min.css";

import RootLayout from "./layouts/root/RootLayout";
import Home from "./pages/home/Home";
import ProjectPage from "./pages/projectpage/ProjectPage";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import ErrorPage from "./pages/error/ErrorPage";
/* Dashboard */
import DataTable from "./components/dashboard/dataTable/DataTable";
import AddEditForm from "./components/dashboard/form/AddEditForm";

const user = "ahmed";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="project/:name" element={<ProjectPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="intro" loader={() => "intro"} element={<AddEditForm />} />
        <Route path="portfolio">
          <Route index loader={() => "portfolio"} element={<DataTable />} />
          <Route
            path="edit/:id"
            loader={() => "portfolio"}
            element={<AddEditForm />}
          />
          <Route
            path="add"
            loader={() => "portfolio"}
            element={<AddEditForm />}
          />
        </Route>
        <Route path="works">
          <Route index loader={() => "works"} element={<DataTable />} />
          <Route
            path="edit/:id"
            loader={() => "works"}
            element={<AddEditForm />}
          />
          <Route path="add" loader={() => "works"} element={<AddEditForm />} />
        </Route>
        <Route path="testimonials">
          <Route index loader={() => "testimonials"} element={<DataTable />} />
          <Route
            path="edit/:id"
            loader={() => "testimonials"}
            element={<AddEditForm />}
          />
          <Route
            path="add"
            loader={() => "testimonials"}
            element={<AddEditForm />}
          />
        </Route>
        <Route
          path="contact"
          loader={() => "contact"}
          element={<AddEditForm />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
