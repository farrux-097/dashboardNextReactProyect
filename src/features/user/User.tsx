import { memo } from "react";

const users = [
  { id: 1, name: "Ali Valiyev", email: "ali@mail.com", role: "Admin" },
  { id: 2, name: "Dilnoza Karimova", email: "dilnoza@mail.com", role: "User" },
  { id: 3, name: "Javohir Xolmatov", email: "javohir@mail.com", role: "Owner" },
  { id: 4, name: "Madina To‘xtayeva", email: "madina@mail.com", role: "User" },
  { id: 5, name: "Rustam Shodmonov", email: "rustam@mail.com", role: "Moderator" },
  { id: 6, name: "Laziz Olimjonov", email: "laziz@mail.com", role: "User" },
  { id: 7, name: "Shahnoza Ortiqova", email: "shahnoza@mail.com", role: "Admin" },
  { id: 8, name: "Jasur Bekmurodov", email: "jasur@mail.com", role: "Editor" },
  { id: 9, name: "Malika Xo‘janova", email: "malika@mail.com", role: "User" },
  { id: 10, name: "Sarvar Xoldorov", email: "sarvar@mail.com", role: "Owner" },
  { id: 11, name: "Zarnigor Rahmonova", email: "zarnigor@mail.com", role: "User" },
  { id: 12, name: "Akmal Anvarov", email: "akmal@mail.com", role: "Moderator" },
  { id: 13, name: "Sevara Toshpulatova", email: "sevara@mail.com", role: "User" },
  { id: 14, name: "Sherzod Yo‘ldoshev", email: "sherzod@mail.com", role: "Admin" },
  { id: 15, name: "Nigora Shamsiyeva", email: "nigora@mail.com", role: "User" },
];


const User = () => {
  return (
    <div className="p-2 w-full">
      <div className="hidden md:block overflow-x-auto rounded-xl shadow">
        <table className="min-w-[600px] w-full border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{user.id}</td>
                <td className="p-3 border-b">{user.name}</td>
                <td className="p-3 border-b">{user.email}</td>
                <td className="p-3 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow bg-white">
            <p><span className="font-semibold">ID:</span> {user.id}</p>
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Role:</span> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(User);
