import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #dbe4ee;
  padding: 30px;
  width: 900px;
  height: 900px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 30px;
  border-radius: 50%;
  border: 1px solid #c0c6cb;
`;

export const Name = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 25px;
  font-style: italic;
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: 30px;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
  list-style-type: none;
  margin-top: 100px;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #747b81;
`;
