import { styled } from "styled-components"

export const FriendItem = styled.li`
display: flex;

`

export const FriendIsOnline = styled.span`
background-color: ${props => props.$status ? "green" : "red"};
height: 10px;
border-radius: 50%;


`