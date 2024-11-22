/* 
  Implement a button which makes a get request to https://reqres.in/ to get a list of users and display them.
  100% free reign to accomplish this goal however you wish, within the context of react.

  apiMethods.js file has already been stubbed out for you. Feel free to use it or not.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****

  Bonus 1:  Add a button for each user to make a delete request to delete that user. 
          Update the displayed users excluding the deleted user.

  Bonus 2: Make a filter box to filter the displayed users by name.
*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getUsers, deleteUser } from "./apiMethods";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId)); // Update the state to remove the deleted user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      user.last_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
