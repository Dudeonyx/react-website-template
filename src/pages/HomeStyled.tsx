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
    <>
      <SideBar {...{ isOpen, toggleIsOpen }} />
      <NavBar {...{ toggleIsOpen }} />
    </>
  );
}
