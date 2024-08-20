import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';


type HomeMenuItemProps = {
  gameName : string
};

const StyledButton = styled(Button)`
    width: 12.5rem;
`;

// const StyledTableOperation = styled(TableOperations)`
//   //justify-content: space-between;
//   flex-wrap: wrap;
// `;


const HomeMenuItem: React.FC<HomeMenuItemProps> = ({gameName }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate('/games/' + gameName)
  }

  return(
    <StyledButton size={'large'} onClick={onClickBtn}>{gameName.charAt(0).toUpperCase() + gameName.slice(1)}</StyledButton>
  );
};

export default HomeMenuItem;