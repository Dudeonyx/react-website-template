import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RouteComponentProps } from "react-router-dom";
import SideBar from "../components/Sidebar/Sidebar";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {
  NavBtnContainer,
  NavBtn,
  NavItem,
  NavLink,
  NavBtnLink,
  NavLinkContainer,
  MobileIcon,
} from "../components/tailwind/NavElement";

export default function HomeTailwind({
  isOpen,
  toggleIsOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) {
  const [active, setactive] = useState<{
    about?: boolean;
    services?: boolean;
    contactus?: boolean;
    signup?: boolean;
  }>({ about: true });

  return (
    <div className="App">
      <SideBar {...{ isOpen, toggleIsOpen }} />
      <div className="h-20 bg-black sticky flex transition-all ease-in-out items-center justify-center">
        <div className="px-6 flex items-center justify-between container max-w-6xl">
          <div className="text-2xl font-bold text-white text-center">
            <p>dolla</p>
          </div>
          <NavLinkContainer>
            <NavItem active={active.about}>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem active={active.services}>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem active={active.contactus}>
              <NavLink to="contactus">Contact Us</NavLink>
            </NavItem>
            <NavItem active={active.signup}>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavLinkContainer>
          <NavBtnContainer>
            <NavBtn>
              <NavBtnLink to="signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavBtnContainer>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </div>
      </div>
    </div>
  );
}
