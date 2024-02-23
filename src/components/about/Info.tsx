import React from 'react';
import styled from 'styled-components';
import {
  MutedText,
  Panel,
  PanelContainer,
  PanelTableContainer,
  PanelTableLabel,
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

const Info: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <ProfileContainer>
          <Profile src={profileImage} alt="Profile" />
        </ProfileContainer>
      </PanelContainer>
      <PanelContainer>
        <PanelTableContainer>
          <tbody>
            <tr>
              <PanelTableLabel>
                <MutedText>Name</MutedText>
              </PanelTableLabel>
              <td>{`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}</td>
            </tr>
            <tr>
              <PanelTableLabel>
                <MutedText>Date of Birth</MutedText>
              </PanelTableLabel>
              <td>
                {`${info.about.info.dateOfBirth.month} ${info.about.info.dateOfBirth.day} ${info.about.info.dateOfBirth.year}`}
              </td>
            </tr>
            <tr>
              <PanelTableLabel>
                <MutedText>Phone</MutedText>
              </PanelTableLabel>
              <td>{info.about.info.phoneNumber}</td>
            </tr>
            <tr>
              <PanelTableLabel>
                <MutedText>Address</MutedText>
              </PanelTableLabel>
              <td>
                <div>
                  <div>{info.about.info.address.address}</div>
                  <div>{`${info.about.info.address.city}, ${info.about.info.address.state}, ${info.about.info.address.postalCode}`}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </PanelTableContainer>
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Info);
