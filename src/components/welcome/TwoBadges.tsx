import React from 'react';
import {
  BadgeArrow,
  FirstBadgeText,
  SecondBadge,
  SecondBadgeArrow,
  TerminalBadge,
} from '../../GlobalStyle';

const TwoBadges: React.FC = () => {
  return (
    <TerminalBadge>
      <FirstBadgeText>joon@MacBook-Air</FirstBadgeText>
      <BadgeArrow />
      <SecondBadge>~/portfolio/</SecondBadge>
      <SecondBadgeArrow />
    </TerminalBadge>
  );
};

export default React.memo(TwoBadges);
