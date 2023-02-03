// parent element does not change in DOM 
import { Fragment } from "react";

function Table ({data, config, KeyFn}){

  // dynamic header
  const renderedHeaders = config.map((column) => {

    // to can add sorting or button .....
    if(column.header){
      return  <Fragment key={column.label}>{column.header()}</Fragment> ;
    }

    return <th key={column.label}>{column.label}</th>
  });

  // dynamic cells //Nested map (New) ,,, dataRaw (general Name) == fruit
const renderedRows = data.map((dataRaw) => {
  const renderedCells = config.map((column) => {
    return <td className="p-2" key={column.label} >{column.render(dataRaw)}</td>
  });

  return(
    <tr className="border-b" key={KeyFn(dataRaw)}>
      {renderedCells}
    </tr>
  );
});

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;