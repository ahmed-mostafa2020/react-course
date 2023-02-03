import UsersTable from "./UsersTable";
import { useState, useEffect  } from "react";
import Table from 'react-bootstrap/Table';
import './UsersTable.css';



function UsersList(){

  const [users , setUsers] = useState([]);
  const url_api = 'https://fakestoreapi.com/users';

  useEffect(() => {
    fetch(url_api).then((res) => res.json()).then((data) =>
      setUsers(data));
  },[]);

  const renderedUsers = users.map((user) => {
    return <UsersTable user={user} key={user.id} />;
  });

  return (
  <>
  <h2 className="text-center">Users Data</h2>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
  </Table>
  {renderedUsers}
  </>
  );
}

export default UsersList;