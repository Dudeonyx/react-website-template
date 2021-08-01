import React from 'react';
import Nav from '../Nav';
import NavBarContainer from '../NavBarContainer';
import NavLogo from '../NavLogo';

interface INavBarProps {}

export const NavBar: React.FC<INavBarProps> = (props) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">dolla</NavLogo>
        </NavBarContainer>
      </Nav>
    </>
  );
};
