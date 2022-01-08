import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { GetProps } from "../../types";

export function NavItem({
  active,
  ...props
}: GetProps<"li"> & { active?: boolean }) {
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
  return <LinkS className={"cursor-pointer" + " " + className} {...props} />;
}
const f = {
  className: "h-",
};
export function NavBtn({ className, ...props }: GetProps<"button">) {
  return (
    <button
      className={
        "bg-default-teal-500 px-4 py-2 rounded-3xl hover:bg-teal-100 font-bold" +
        " " +
        className
      }
      {...props}
    />
  );
}

export function NavBtnLink(props: GetProps<typeof LinkR>) {
  return <LinkR {...props} />;
}

export function NavBtnContainer({ className, ...props }: GetProps<"div">) {
  return <div className={"justify-center flex" + " " + className} {...props} />;
}

export function NavLinkContainer({ className, ...props }: GetProps<"ul">) {
  return (
    <ul
      className={
        "flex-auto justify-around text-white max-w-sm hidden md:flex" +
        " " +
        className
      }
      {...props}
    />
  );
}

export const MobileIcon = ({ className, ...props }: GetProps<"div">) => (
  <div
    className={"flex md:hidden text-white text-2xl" + " " + className}
    {...props}
  />
);
