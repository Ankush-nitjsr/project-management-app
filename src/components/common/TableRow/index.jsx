import "./style.css";

function TableRow({ rowData }) {
  return (
    <tr className="tableRow">
      <td>
        <input type="checkbox" className="checkbox-input" />
        {rowData.icon}
        {rowData.name} {rowData.messageIcon && rowData.messageCount}
      </td>
      <td>{rowData.description}</td>
      <td>{rowData.members}</td>
      <td>{rowData.categories}</td>
      <td>{rowData.tags}</td>
      <td>{rowData.nextMeeting}</td>
      <td></td>
    </tr>
  );
}

export default TableRow;
