import Table from "../components/Table";

function TablePage() {

  // each obj represents a column => label for header render for cell
  const config = [
    { label: 'Fruit', render: (fruit) => fruit.name },
    { label: 'Color' , render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />},
    { label: 'Score' , render: (fruit) => fruit.score},
  ];

  //table of fruit data
  const data =[
    { name: 'Orange' ,color: 'bg-orange-500' ,score: '5'},
    { name: 'Apple' ,color: 'bg-red-500' ,score: '3'},
    { name: 'Banana' ,color: 'bg-yellow-500' ,score: '1'},
    { name: 'Lime' ,color: 'bg-green-500' ,score: '4'},
  ];

  const KeyFn = (fruit) =>{
    return fruit.name ;
  };

  return(
    <Table data={data} config={config} KeyFn={KeyFn} />
  );
}

  export default TablePage; 