import React from 'react';
import styled from 'styled-components';
import {
  MutedText,
  PanelContainer,
  PanelLogoContainer,
} from '../../GlobalStyle';
import PurdueLogo from '../../image/PurdueLogo.png';
import info from '../../info.json';

const PurdueLogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

const TableContainer = styled.table`
  border-spacing: 0.25rem;
`;

const Education: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PurdueLogoImage src={PurdueLogo} alt="Purdue" />
      </PanelLogoContainer>
      <PanelLogoContainer>
        <TableContainer>
          <tr>
            <td>
              <MutedText>Name</MutedText>
            </td>
            <td>{info.about.education.university.name}</td>
          </tr>
          <tr>
            <td>
              <MutedText>Graduated</MutedText>
            </td>
            <td>
              {`${info.about.education.university.graduateYear.month} ${info.about.education.university.graduateYear.year}`}
            </td>
          </tr>
          <tr>
            <td>
              <MutedText>Degree</MutedText>
            </td>
            <td>{info.about.education.university.degree}</td>
          </tr>
          <tr>
            <td>
              <MutedText>Major</MutedText>
            </td>
            <td>{info.about.education.university.major}</td>
          </tr>
          <tr>
            <td>
              <MutedText>Concentration</MutedText>
            </td>
            <td>{info.about.education.university.concentration}</td>
          </tr>
        </TableContainer>
      </PanelLogoContainer>
    </PanelContainer>
  );
};

export default React.memo(Education);
