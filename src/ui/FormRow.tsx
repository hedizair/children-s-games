import styled, { css } from 'styled-components';
import React, { JSX } from 'react';
import { HiInformationCircle } from 'react-icons/hi2';
import Tooltip from './Tooltip';

const StyledDiv = styled.div`
    justify-content: space-between;
    align-items: center;
`

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 16rem 2fr;

  gap: 1rem 2.4rem;
  @media (max-width: 768px) {
    grid-template-columns: 6rem 2fr;
    grid-template-rows: 1fr min-content;
    gap: 1.2rem;
    padding-bottom: 0;
  }

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  grid-column: 2 / -1;
  grid-row: 2;
`;

type FormRowProps =
  | {
      label?: string;
      error?: string;
      children: JSX.Element | JSX.Element[];
      hidden?: boolean;
      id?: string;
      required?: boolean;
      info?: string;
      disableDivider?: boolean;
    }
  | {
      label?: string;
      error?: string;
      children: Array<JSX.Element | undefined> | undefined;
      hidden: boolean;
      id: string;
      required?: boolean;
      info?: string;
      disableDivider?: boolean;
    };

const FormRow: React.FC<FormRowProps> = ({ label, error, children, hidden = false, id, required = false, info }) => {
  if (hidden) return null;

  const htmlFor = id || Array.isArray(children) || children === undefined ? id : children.props.id;
  return (
    <StyledFormRow>
      {label && (
        <StyledDiv>
          <Label htmlFor={htmlFor}>{`${label}${required ? ' *' : ''}`}</Label>
          {info && <HiInformationCircle data-tooltip-id={`tooltip-${id}`} />}

          <Tooltip
            id={`tooltip-${id}`}
            place="bottom"
            variant="info"
            content={info}
            style={{ backgroundColor: 'var(--color-brand-600)', color: 'var(--color-grey-0)' }}
          />
        </StyledDiv>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;