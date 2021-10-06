import { faFolderOpen, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333333;
  color: white;
`;

const ListItem = styled.li`
  font-size: 1.5em;
  text-align: center;
`;

function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContainer>
      <ul>
        <ListItem>
          <FontAwesomeIcon icon={faUser} />
          About
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCode} />
          Skills
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faFolderOpen} />
          Projects
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCog} />
        </ListItem>
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;
