import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  LinkLabel,
  PanelTableContainer,
  PanelTableLabel,
  MutedText,
  PanelContainer,
} from '../../GlobalStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ProjectDescriptionTableProps = {
  name: string;
  link: string;
  stack: Array<string>;
  details: string;
};

const ProjectDescriptionTable: React.FC<ProjectDescriptionTableProps> = ({
  name,
  link,
  stack,
  details,
}) => {
  return (
    <PanelContainer>
      <PanelTableContainer>
        <tbody>
          <tr>
            <PanelTableLabel>
              <MutedText>Name</MutedText>
            </PanelTableLabel>
            <td>{name}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Link</MutedText>
            </PanelTableLabel>
            <td>
              <LinkLabel href={link}>
                <span>
                  Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
                </span>
              </LinkLabel>
            </td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Stack</MutedText>
            </PanelTableLabel>
            <td>
              {stack.map((value, idx) =>
                idx === stack.length - 1 ? value : value + ', '
              )}
            </td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Details</MutedText>
            </PanelTableLabel>
            <td>{details}</td>
          </tr>
        </tbody>
      </PanelTableContainer>
    </PanelContainer>
  );
};

export default React.memo(ProjectDescriptionTable);
