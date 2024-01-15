import { styled } from 'styled-components';

export const TableTitles = styled.tr`
  background-color: #b5dbe5;
  th {
    border: 1px solid black;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;



export const Tablerow = styled.tr`
&:nth-child(even) {
  background-color: #f2f2f2;
}

td {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  border: 1px solid #ddd;
  text-transform: capitalize;
}
`
