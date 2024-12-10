import styled from "styled-components";

export const User = styled.div`
  display: flex;
  margin-top: 5px;
  border: solid 1px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    background: #a1a3a3;
  }
`;

export const UserImage = styled.img`
width: 30px;
height 30px;
`;

export const UserList = styled.ul`
  list-style-type: none;
`;
