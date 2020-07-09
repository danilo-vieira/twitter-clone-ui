import React from 'react';

import { Container, Item, Title } from './style';

interface IListProps {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<IListProps> = ({ title, elements }) => (
  <Container>
    <Item>
      <Title>{title}</Title>

      {elements?.map((element, index) => (
        <Item key={`${index + Math.random()}`}>{element}</Item>
      ))}
    </Item>
  </Container>
);

export default List;
