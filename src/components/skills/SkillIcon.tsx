import React from "react";
import styled from "styled-components";

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "4rem")};
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

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export type SkillIconProps = {
  name: string;
  icon: string;
  background: boolean;
  iconStyles?: React.CSSProperties;
  noWidth?: boolean;
};

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  icon,
  background,
  iconStyles,
  noWidth,
}) => {
  return (
    <SkillsIconContainer noWidth={noWidth}>
      {background ? (
        <IconImageContainer>
          <img src={icon} alt={name} style={iconStyles} />
        </IconImageContainer>
      ) : (
        <img src={icon} alt={name} style={iconStyles} />
      )}
      <IconLabel>{name}</IconLabel>
    </SkillsIconContainer>
  );
};

export default SkillIcon;
