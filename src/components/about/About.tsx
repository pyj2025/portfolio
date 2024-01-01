import React from 'react';
import styled from 'styled-components';
import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionLabel,
  PanelDescriptionRow,
  PanelDescriptionText,
  PanelLogoContainer,
} from '../../GlobalStyle';
import info from '../../info.json';
import profileImage from '../../image/Profile.png';

const ProfileContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
`;

const Profile = styled.img`
  width: 100%;
  height: auto;
`;

const About: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <ProfileContainer>
          <Profile src={profileImage} alt="Profile" />
        </ProfileContainer>
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>{`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Date of Birth</PanelDescriptionLabel>
          <PanelDescriptionText>{`${info.about.info.dateOfBirth.month} ${info.about.info.dateOfBirth.day} ${info.about.info.dateOfBirth.year}`}</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Phone</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.about.info.phoneNumber}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Address</PanelDescriptionLabel>
          <div>
            <div>{info.about.info.address.address}</div>
            <div>{`${info.about.info.address.city}, ${info.about.info.address.state}, ${info.about.info.address.postalCode}`}</div>
          </div>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default React.memo(About);
