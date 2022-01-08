import { Link as LinkS } from "react-scroll";
import { GetProps } from "../../types";
import { ComponentProps, ReactNode } from "react";

export const SidebarContainer = (props: {
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}) => (
  <aside
    className={`${
      props.isOpen ? "visible top-0" : "invisible top-full"
    } md:hidden w-screen h-screen fixed inset-0 bg-black z-50 transition-all `}
    onClick={props.onClick}
  >
    {props.children}
  </aside>
);
export function SidebarItems({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={
        "py-4 cursor-pointer hover:scale-x-110 text-center" + " " + className
      }
      {...props}
    />
  );
}
export function SidebarLink({ className, ...props }: GetProps<typeof LinkS>) {
  return <LinkS className={className} {...props} />;
}
export const SideBarCloseIconContainer = (
  props: {
    toggleIsOpen: () => void;
  } & GetProps<"div">
) => (
  <div
    className="h-8 absolute top-10 right-10"
    onClick={(e) => {
      props.toggleIsOpen();
      e.stopPropagation();
    }}
    children={props.children}
  />
);
export const SidebarList = ({ className = "", ...props }: GetProps<"ul">) => (
  <ul
    className={
      "flex flex-col justify-evenly items-stretch text-2xl text-white" +
      " " +
      className
    }
    {...props}
  />
);
export const SidebarInnerContainer = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={
      "flex flex-col items-stretch justify-evenly h-full w-full" +
      " " +
      className
    }
  >
    {children}
  </div>
);

const t = { className: "hover" };
