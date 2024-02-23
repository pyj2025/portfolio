import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ReactNode } from 'react';
import {
  MobileBackButton,
  MobileBackButtonContainer,
  MobilePanelContainer,
} from '../GlobalStyle';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type MobilePanelProps = {
  onClick: () => void;
  children?: ReactNode;
};

const MobilePanel: React.FC<MobilePanelProps> = ({ onClick, children }) => {
  return (
    <MobilePanelContainer>
      <MobileBackButtonContainer>
        <MobileBackButton onClick={onClick}>
          <FontAwesomeIcon icon={faArrowLeft as IconProp} />
        </MobileBackButton>
      </MobileBackButtonContainer>
      {children}
    </MobilePanelContainer>
  );
};

export default React.memo(MobilePanel);
