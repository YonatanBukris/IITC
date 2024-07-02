import axios from "axios";
import React from "react";


function RegisterPage() {
  async function handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    console.log({ username, password, firstName, lastName }); // Debugging line to check form data

    await api.post("/auth/register", {
      username,
      password,
      firstName,
      lastName,
    });
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
