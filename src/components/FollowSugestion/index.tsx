import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface IFollowSugestionProps {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<IFollowSugestionProps> = ({
  name,
  nickname,
}) => (
  <Container>
    <div>
      <Avatar />

      <Info>
        <strong>{name}</strong>
        <span>{nickname}</span>
      </Info>
    </div>
    <FollowButton outlined>Seguir</FollowButton>
  </Container>
);

export default FollowSugestion;
