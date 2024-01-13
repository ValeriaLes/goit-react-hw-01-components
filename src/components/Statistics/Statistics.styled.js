import { styled } from 'styled-components';

export const Section = styled.section`
  background-color: #e9d361;
  padding: 30px;

  width: 900px;
  height: 200px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  list-style-type: none;
  margin: 50px 0 0 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid;
`;
