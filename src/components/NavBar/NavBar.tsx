import React from 'react';
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from '../NavElements';
import { FaBars } from 'react-icons/fa';

interface INavBarProps {}

export const NavBar: React.FC<INavBarProps> = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"></NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};
