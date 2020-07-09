import React from 'react';

import Main from '../Main';

import { Container, Wrapper, MenuBar, SideBar } from './styles';

const Layout: React.FC = () => (
  <Container>
    <Wrapper>
      {/* <MenuBar /> */}
      <Main />
      {/* <SideBar /> */}
    </Wrapper>
  </Container>
);

export default Layout;
