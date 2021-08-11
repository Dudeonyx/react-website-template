import { FaBars } from "react-icons/fa";
import {
  NavBtnContainer,
  NavBtn,
  NavItem,
  NavLink,
  NavBtnLink,
  NavLinkContainer,
  MobileIcon,
} from "./NavElement";
import { ActiveNav } from "../../pages/HomeTailwind";
import { Link as LinkR } from "react-router-dom";

export function NavBarTailwind(props: {
  active: ActiveNav;
  toggleIsOpen: () => void;
}): JSX.Element {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="text-2xl font-bold text-white text-center">
          <LinkR to="/">
            <p>dolla</p>
          </LinkR>
        </div>
        <NavLinkContainer>
          <NavItem active={props.active.about}>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem active={props.active.services}>
            <NavLink to="services">Services</NavLink>
          </NavItem>
          <NavItem active={props.active.contactus}>
            <NavLink to="contactus">Contact Us</NavLink>
          </NavItem>
          <NavItem active={props.active.signup}>
            <NavLink to="signup">Sign Up</NavLink>
          </NavItem>
        </NavLinkContainer>
        <NavBtnContainer className="hidden md:flex">
          <NavBtn>
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBtnContainer>
        <MobileIcon onClick={props.toggleIsOpen}>
          <FaBars />
        </MobileIcon>
      </div>
    </div>
  );
}
