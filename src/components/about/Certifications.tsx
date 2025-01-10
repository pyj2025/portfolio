import React from 'react';
import styled from 'styled-components';
import { DatabrickGenAIFundamentalsIcon } from '../../image/certifications/DatabrickGenAIFundamentals';
import { AboutIndexType } from '../../types';

const IconListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  cursor: pointer;
`;

interface CertificationsProps {
  toggleIndex: (index: AboutIndexType) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ toggleIndex }) => {
  return (
    <IconListContainer>
      <IconContainer
        title="GenAIFundamentals"
        onClick={() => toggleIndex('GenAI')}
      >
        <DatabrickGenAIFundamentalsIcon />
      </IconContainer>
    </IconListContainer>
  );
};

export default React.memo(Certifications);
