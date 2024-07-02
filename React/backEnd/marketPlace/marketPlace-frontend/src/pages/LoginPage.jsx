import React from 'react';
import { formatJWTTokenToUser } from "../utils/formatJWTTokenToUser";
import { useUserContext } from "./userProvider";
import axios from 'axios';
import api from '../services/api.service';



function LoginPage() {
  const { login } = useUserContext();

  async function handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const res = await api.post("/auth/login", {
      username,
      password,
    });
    const { token } = res.data;
    localStorage.setItem("token", token);

    const { userId } = formatJWTTokenToUser(token);

    const userInfo = await api.get(`/auth/login/${userId}`);

    login(userInfo.data);

  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
