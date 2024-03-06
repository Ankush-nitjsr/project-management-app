import TableRow from "../TableRow";
import "./style.css";

function Table({ data }) {
  return (
    <table className="mainTable">
      <thead>
        <tr>
          <th>
            <input type="checkbox" className="checkbox-input" />
            Brand
          </th>
          <th>Description</th>
          <th>Members</th>
          <th>Categories</th>
          <th>Tags</th>
          <th>Next meeting</th>
          <th>+</th>
        </tr>
      </thead>
      {
        <tbody>
          {data.map((rowTask, id) => (
            <TableRow key={id} rowData={rowTask} />
          ))}
        </tbody>
      }
      <tfoot>
        <tr>
          <td>4 Count</td>
          <td>+ Add calculation</td>
          <td>+ Add calculation</td>
          <td>+ Add calculation</td>
          <td>+ Add calculation</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
