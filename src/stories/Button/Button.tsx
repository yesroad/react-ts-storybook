import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  display: inline-block;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button