import { FaTimes } from "react-icons/fa";
import { NavBtnContainer, NavBtn, NavBtnLink } from "./NavElement";
import {
  SidebarContainer,
  SidebarInnerContainer,
  SideBarCloseIconContainer,
  SidebarList,
  SidebarItems,
  SidebarLink,
} from "./SidebarElements";

export function SideBarTailwind(props: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}): JSX.Element {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggleIsOpen}>
      <SidebarInnerContainer>
        <SideBarCloseIconContainer toggleIsOpen={props.toggleIsOpen}>
          <FaTimes className="text-white text-3xl" />
        </SideBarCloseIconContainer>
        <div className="flex flex-col justify-evenly">
          <SidebarList>
            <SidebarItems>
              <SidebarLink to="about">About</SidebarLink>
            </SidebarItems>
            <SidebarItems>
              <SidebarLink to="services">Services</SidebarLink>
            </SidebarItems>
            <SidebarItems>
              <SidebarLink to="contactus">Contact Us</SidebarLink>
            </SidebarItems>
            <SidebarItems>
              <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarItems>
          </SidebarList>
        </div>
        <NavBtnContainer className="">
          <NavBtn
            className="px-12 py-4 text-2xl"
            style={{
              borderRadius: "2rem",
            }}
          >
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBtnContainer>
      </SidebarInnerContainer>
    </SidebarContainer>
  );
}
