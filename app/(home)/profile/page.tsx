"use client";
import React from "react";
import { useAuthStore } from "@/store/authStore";
import Card from "@/component/card/Card";

const Profile = () => {
  const { user } = useAuthStore();

  return (
    <Card title="Profile Info">
      <p className="text-gray-700 mb-2">
        <strong>Name:</strong> {user?.name}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> {user?.email}
      </p>
      <p className="text-gray-700">
        <strong>Role:</strong> {user?.role}
      </p>
    </Card>
  );
};

export default Profile;
