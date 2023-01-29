// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {

  // each obj represents a column => label for header render for cell
  const config = [
    { label: 'Fruit', render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name }, // th i want make sortable
    { label: 'Color' , render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />},
    { label: 'Score' , render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score },
  ];

  // table of fruit data
  const data =[
    { name: 'Orange' ,color: 'bg-orange-500' ,score: '5'},
    { name: 'Apple' ,color: 'bg-red-500' ,score: '3'},
    { name: 'Banana' ,color: 'bg-yellow-500' ,score: '1'},
    { name: 'Lime' ,color: 'bg-green-500' ,score: '4'},
  ];

  const KeyFn = (fruit) => {
    return fruit.name ;
  };

  return(
    <SortableTable data={data} config={config} KeyFn={KeyFn} />
  );
}

  export default TablePage; 