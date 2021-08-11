import { useState } from "react";
import "./HomeTailwind.css";
import { SideBarTailwind } from "../components/tailwind/SidebarTailwind";
import { NavBarTailwind } from "../components/tailwind/NavBarTailwind";

export interface ActiveNav {
  about?: boolean;
  services?: boolean;
  contactus?: boolean;
  signup?: boolean;
}
export default function HomeTailwind({
  isOpen,
  toggleIsOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) {
  const [active, setactive] = useState<ActiveNav>({ about: true });

  return (
    <div className="App">
      {/* <SideBar {...{ isOpen, toggleIsOpen }} /> */}
      <SideBarTailwind
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      ></SideBarTailwind>
      <NavBarTailwind
        toggleIsOpen={toggleIsOpen}
        active={active}
      ></NavBarTailwind>
    </div>
  );
}
