import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const SkillsIconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

const Mobile: React.FC = () => {
  return (
    <ContentContainer>
      <SkillsIconContainer noWidth>
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React-Native"
        />
        <IconLabel>React Native</IconLabel>
      </SkillsIconContainer>
      <SkillsIconContainer>
        <img
          src="https://img.icons8.com/color/48/000000/swift.png"
          alt="Swift"
        />
        <IconLabel>Swift</IconLabel>
      </SkillsIconContainer>
    </ContentContainer>
  );
};

export default Mobile;
