import Table from 'react-bootstrap/Table';
import './UsersTable.css';


function UsersTable ({user}){

  
  return(
    <>
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.name["firstname"]}</td>
          <td>{user.name["lastname"]}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default UsersTable;