import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "../components/Sidebar/Sidebar";
import "./HomeTailwind.css";
import {
  NavBtnContainer,
  NavBtn,
  NavItem,
  NavLink,
  NavBtnLink,
  NavLinkContainer,
  MobileIcon,
} from "../components/tailwind/NavElement";
import { Link as LinkS } from "react-scroll";

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
      {/* <SideBar {...{ isOpen, toggleIsOpen }} /> */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-screen h-screen absolute inset-0 bg-black z-50`}
        onClick={toggleIsOpen}
      >
        <div className="flex flex-col  items-center justify-evenly h-full w-full">
          <div
            className="h-8 absolute top-10 right-10"
            onClick={(e) => {
              toggleIsOpen();
              e.stopPropagation();
            }}
          >
            <FaTimes className="text-white text-3xl"></FaTimes>
          </div>
          <div className="flex flex-col justify-evenly">
            <ul className="flex flex-col justify-evenly items-center text-2xl text-white">
              <li className="py-4 cursor-pointer hover:scale-x-110">
                <LinkS to="">About</LinkS>
              </li>
              <li className="py-4 cursor-pointer hover:scale-x-110">
                <LinkS to="">Services</LinkS>
              </li>
              <li className="py-4 cursor-pointer hover:scale-x-110">
                <LinkS to="">Contact Us</LinkS>
              </li>
              <li className="py-4 cursor-pointer hover:scale-x-110">
                <LinkS to="">Sign Up</LinkS>
              </li>
            </ul>
          </div>
          <NavBtnContainer className="">
            <NavBtn
              className="px-12 py-4 text-2xl"
              style={{ borderRadius: "2rem" }}
            >
              <NavBtnLink to="signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavBtnContainer>
        </div>
      </aside>
      <div className="nav-bar">
        <div className="nav-container">
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
          <NavBtnContainer className="hidden md:flex ">
            <NavBtn>
              <NavBtnLink to="signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavBtnContainer>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
        </div>
      </div>
    </div>
  );
}
