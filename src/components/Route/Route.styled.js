import styled from "styled-components";

export const pageRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 5px;
`;

export const pageCount = styled.p`
  padding: 0px 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;
