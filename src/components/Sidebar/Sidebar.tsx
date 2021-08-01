import React, { useState } from 'react';
import { CloseIcon, Icon, SidebarContainer } from './SidebarElement';

interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = (props) => {
  const [isOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  );
};

export default SideBar;
