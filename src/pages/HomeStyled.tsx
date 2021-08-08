import React from "react";
import { RouteComponentProps } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/Sidebar/Sidebar";

export default function HomeStyled({
  isOpen,
  toggleIsOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) {
  return (
    <div className="App">
      <SideBar {...{ isOpen, toggleIsOpen }} />
      <NavBar {...{ toggleIsOpen }} />
    </div>
  );
}
