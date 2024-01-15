import { TableTitles, Table, Tablerow}  from "./Transactions.styled";


export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableTitles>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTitles>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <Tablerow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tablerow>
        ))}
      </tbody>
    </Table>
  );
};
