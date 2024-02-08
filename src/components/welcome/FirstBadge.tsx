import React from 'react';
import { BadgeArrow, FirstBadgeText, TerminalBadge } from '../../GlobalStyle';

type FirstBadgeProps = {
  directory: string;
};

const FirstBadge: React.FC<FirstBadgeProps> = ({ directory }) => {
  return (
    <TerminalBadge>
      <FirstBadgeText>{directory}</FirstBadgeText>
      <BadgeArrow first />
    </TerminalBadge>
  );
};

export default React.memo(FirstBadge);
