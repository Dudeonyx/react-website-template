import { Component, ComponentProps } from "react";
import { PropsWithoutRef } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { GetProps } from "../../types";

export function NavItem({
  active,
  ...props
}: ComponentProps<"li"> & { active?: boolean }) {
  return (
    <li
      className={`h-20 flex items-center px-2 rounded-b-sm ${
        active ? "border-b-2 border-teal-400" : ""
      }`}
      {...props}
    />
  );
}
export function NavLink({ className, ...props }: GetProps<LinkS>) {
  return <LinkS className={className + " " + "cursor-pointer"} {...props} />;
}

export function NavBtn({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={
        "bg-teal-500 px-4 py-2 rounded-3xl hover:bg-teal-100 " + className
      }
      {...props}
    />
  );
}

export function NavBtnLink(props: GetProps<typeof LinkR>) {
  return <LinkR {...props} />;
}

export function NavBtnContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={"justify-center flex" + className} {...props} />;
}

export function NavLinkContainer({
  className,
  ...props
}: ComponentProps<"ul">) {
  return (
    <ul
      className={
        "flex-auto justify-around text-white max-w-sm hidden md:flex " +
        className
      }
      {...props}
    />
  );
}

export const MobileIcon = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={"flex md:hidden text-white text-2xl " + className}
    {...props}
  />
);
