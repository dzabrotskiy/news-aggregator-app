import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1240px;
  width: 100%;

  ${props => props.theme.breakpoints.down('lg')} {
    max-width: 100%;
    width: 100%;
    padding: 0 30px;
  }
`;
