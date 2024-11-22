/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/api/";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}users`);
    return response.data.data; // Return the array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Bonus:
export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${baseUrl}users/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
