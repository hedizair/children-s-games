// import React from 'react';
// import styled, { css } from 'styled-components';


// type ButtonProps = {
//   text : string,
//   onClick : () => void
//   size? :  'sm' | 'md' | 'lg'
// };

// const Container = styled.button`
//   border: 3px solid var(--color-800);
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-300);
//   height: auto;
//   padding: 0;
//   :hover{
//     background-color:  var(--color-800);
//     color: white;
//     border-color:  var(--color-300);
//   };
//   z-index: 2;
// `;

// const Text = styled.p<{ $textSize?: 'sm' | 'md' | 'lg'; }>`

//   ${(props) => {
//     switch (props.$textSize) {
//       case "sm":
//         return css`
//           color: black;
//           padding: 10px;
//           font-size: var(--font-size-sm);
//         `;
//       case "md":
//         return css`
//           color: black;
//           padding: 10px;
//           font-size: var(--font-size-md);
//         `;
//       default:
//         return css`
//           color: black;
//           padding: 10px;
//           font-size: var(--font-size-lg);
//         `;
//     }
//   }}
//   :hover {
//     color: white;
//   }

// `

// const Button: React.FC<ButtonProps> = ({text, onClick, size}) => {
//   return(
//     <Container onClick={onClick}>
//         <Text $textSize={size}>{text}</Text>
//     </Container>
//   );
// };

// export default Button;

import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: 'black';
    background-color: var(--color-600);

    &:hover {
      color: 'white';
      background-color: var(--color-900);
    }
  `,
};

type ButtonProps = {
  $variation?: 'primary' ;
  size?: 'small' | 'medium' | 'large';
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${props => sizes[props.size || 'medium']}
  ${props => variations[props.$variation || 'primary']}
`;

Button.defaultProps = {
  $variation: 'primary',
  size: 'medium',
};

export default Button;