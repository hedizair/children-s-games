import styled from 'styled-components';

const Header = styled.header`
  padding: 2rem;
  border: 2px solid var(--color-100);
  background-color: var(--color-50);
  grid-area: header;
`;

const Content = styled.main`
  padding: 2rem 0;
  overflow: auto;
  grid-area: main;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 1.2rem 2rem;
  gap: 2rem;
  border: 2px solid var(--color-100);
  grid-area: footer;
  background-color: var(--color-50);
`;

const EditLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

export default Object.assign(EditLayout, { Header, Content, Footer });