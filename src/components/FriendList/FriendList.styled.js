import { styled } from 'styled-components';

export const List = styled.ul`
  text-align: center;

  list-style-type: none;
`;

export const FriendItem = styled.li`
display: flex;

`

export const FriendIsOnline = styled.span`
background-color: ${({status}) => (status ? 'green' : 'red')};
height: 10px;
border-radius: 50%;


`



