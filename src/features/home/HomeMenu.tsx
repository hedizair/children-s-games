import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeMenuItem from './HomeMenuItem';


type HomeMenuProps = {
  
};

// const StyledTableOperation = styled(TableOperations)`
//   //justify-content: space-between;
//   flex-wrap: wrap;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1.2rem;

`;

const HomeMenu: React.FC<HomeMenuProps> = ({ }) => {
  return(
    <Container>
        <HomeMenuItem gameName={'bingo'} />
        <HomeMenuItem gameName={'loto'} />
    </Container>
  );
};

export default HomeMenu;