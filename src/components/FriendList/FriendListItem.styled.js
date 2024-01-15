import { styled } from "styled-components"

export const FriendItem = styled.li`
display: flex;
gap: 10px;
align-items: center;
border: 1px solid;
padding: 10px;

`

export const FriendIsOnline = styled.span`
background-color: ${props => props.$status ? "green" : "red"};
height: 10px;
width: 10px;
border-radius: 50%;


`