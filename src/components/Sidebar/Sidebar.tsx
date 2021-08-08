import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements';

interface ISideBarProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const SideBar: React.FC<ISideBarProps> = ({ isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon
        onClick={(e) => {
          toggleIsOpen();
          e.stopPropagation();
        }}
      >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
