import React from 'react';
import styled from 'styled-components';
import { getSkillIcon } from './getSkillIcon';

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : '4rem')};
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
  text-align: center;
  height: 1em;
  margin-top: 0.25rem;
`;

export type SkillIconProps = {
  name: string;
  noWidth?: boolean;
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, noWidth }) => {
  return (
    <SkillsIconContainer title={name} noWidth={noWidth}>
      {getSkillIcon(name)}
      <IconLabel>{name}</IconLabel>
    </SkillsIconContainer>
  );
};

export default SkillIcon;
