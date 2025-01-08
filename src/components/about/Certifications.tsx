import React from 'react';
import styled from 'styled-components';
import { DatabrickGenAIFundamentalsIcon } from '../../image/certifications/DatabrickGenAIFundamentals';
import GenAIFundamentals from './certification/GenAIFundamentals';

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

type CertificationsType = 'Icons' | 'GenAIFundamentals';

const Certifications: React.FC = () => {
  const [index, setIndex] = React.useState<CertificationsType>('Icons');

  const toggleIndex = (index: CertificationsType) => {
    setIndex(index);
  };

  const renderContent = React.useCallback(() => {
    if (index === 'GenAIFundamentals') {
      return <GenAIFundamentals />;
    }

    return (
      <IconListContainer>
        <IconContainer
          title="GenAIFundamentals"
          onClick={() => toggleIndex('GenAIFundamentals')}
        >
          <DatabrickGenAIFundamentalsIcon />
        </IconContainer>
      </IconListContainer>
    );
  }, [index]);

  return <>{renderContent()}</>;
};

export default React.memo(Certifications);
