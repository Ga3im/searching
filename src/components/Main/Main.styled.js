import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const DateFilterItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateSearch = styled.div`
  display: flex;
  align-items: center;
  &: hover {
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 1px;
    border-left: 1.9px solid #000000;
    border-bottom: 1.9px solid #000000;
    transform: rotate(${(props) => (props.$isOpen ? "135deg" : "-45deg")});
    margin: ${(props) => (props.$isOpen ? "7px 0 0 5px" : "-6px 0 0 5px")};
    padding: 0;
  }
`;

export const FilterItem = styled.div`
  &: hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  background: linear-gradient(white, #84c2d0);
`;

export const Ul = styled.ul`
  width: 333px;
`;

export const Error = styled.div`
  color: red;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;
