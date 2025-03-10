"use client";

import Image from "next/image";
import React, { useState } from "react";

const UsersPage = () => {
  // Sample user data
  const [users] = useState([
    {
      id: 1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Admin",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "User",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Sam Wilson",
      email: "sam.wilson@example.com",
      role: "User",
      avatar: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Taylor Brown",
      email: "taylor.brown@example.com",
      role: "Developer",
      avatar: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Jordan Lee",
      email: "jordan.lee@example.com",
      role: "User",
      avatar: "/placeholder.svg",
    },
  ]);

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-2xl font-medium mb-6">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-md shadow border cursor-pointer border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={user.avatar}
                alt={`${user.name} avatar`}
                className="size-16 rounded-full bg-gray-200"
                width={60}
                height={60}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                <span className="inline-block px-2 py-0.5 mt-1 text-xs font-medium rounded-full bg-gray-100">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
