import styled, { css } from 'styled-components';

const Form = styled.form<{ }>`
  padding: 2.4rem 2.4rem;
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  overflow: hidden;
  font-size: 1.4rem;

  section:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  section:first-child {
    padding-top: 0;
  }
`;

Form.defaultProps = {

};

export default Form;