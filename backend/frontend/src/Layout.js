import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 30px 5%;
  min-height: 100dvh;
  background-color: #f7f7f7;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Logo = styled.div`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  font-size: 1.25rem;
  color: #666;
`;

export const NextButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-end;
  margin-top: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;