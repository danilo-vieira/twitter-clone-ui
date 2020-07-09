import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditProfileDataButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditProfileDataButton outlined>Editar perfil</EditProfileDataButton>

      <h1>Danilo Vieira</h1>
      <h2>@desc133</h2>

      <p>
        Part of the community experience team at
{' '}
        <a href="https://rocketseat.com.br">@Rocketseat</a>
      </p>

      <ul>
        <li>
          <LocationIcon />
          Picos, Brasil
        </li>
        <li>
          <CakeIcon />
          Nascido(a) em 3 de fevereiro de 1999
        </li>
      </ul>

      <Followage>
        <span>
          Seguindo
          <strong> 58</strong>
        </span>
        <span>
          <strong>94 </strong>
          seguidores
        </span>
      </Followage>
    </ProfileData>

    <Feed />
  </Container>
);

export default ProfilePage;
