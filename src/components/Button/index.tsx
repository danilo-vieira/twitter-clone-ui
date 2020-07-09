import styled from 'styled-components';

interface IButtonProps {
  outlined?: boolean;
}

const hover = {
  out: 'var(--twitter-dark-hover)',
  notOut: 'var(--twitter-light-hover)',
};

export default styled.button<IButtonProps>`
  background: ${props => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${props => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${({ outlined }) => (outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props => (props.outlined ? hover.out : hover.notOut)};
  }
`;
