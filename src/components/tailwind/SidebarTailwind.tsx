import { FaTimes } from "react-icons/fa";
import { NavBtnContainer, NavBtn, NavBtnLink } from "./NavElement";
import { Link as LinkS } from "react-scroll";
import { GetProps } from "../../types";
import { ComponentProps } from "react";

function SidebarItems({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={
        "py-4 cursor-pointer hover:scale-x-110 text-center" + " " + className
      }
      {...props}
    />
  );
}

function SidebarLink({ className, ...props }: GetProps<typeof LinkS>) {
  return <LinkS className={className} {...props} />;
}

export function SideBarTailwind(props: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}): JSX.Element {
  return (
    <aside
      className={`${
        props.isOpen ? "visible top-0" : "invisible top-full"
      } md:hidden w-screen h-screen fixed inset-0 bg-black z-50 transition-all `}
      onClick={props.toggleIsOpen}
    >
      <div className="flex flex-col items-stretch justify-evenly h-full w-full">
        <div
          className="h-8 absolute top-10 right-10"
          onClick={(e) => {
            props.toggleIsOpen();
            e.stopPropagation();
          }}
        >
          <FaTimes className="text-white text-3xl" />
        </div>
        <div className="flex flex-col justify-evenly">
          <ul className="flex flex-col justify-evenly items-stretch text-2xl text-white">
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
          </ul>
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
      </div>
    </aside>
  );
}
