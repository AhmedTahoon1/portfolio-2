import React from "react";
import { Outlet } from "react-router-dom";
import useDocTitle from "../../hooks/useDocTitle";
export default function RootLayout() {
  useDocTitle("A.Tahoon Portfolio");
  return <Outlet />;
}
