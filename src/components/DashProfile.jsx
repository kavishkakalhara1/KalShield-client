import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-full max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="self-center w-32 h-32 overflow-hidden rounded-full shadow cursor-pointer-md">
          <img
            src={currentUser.profilePicture}
            alt="user profile pic"
            className="object-cover w-full h-full border-8 rounded-full"
          />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <TextInput
          id="email"
          type="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <TextInput
          id="password"
          type="password"
          placeholder="Password"
        />
        <Button color="purple">Update</Button>
      </form>
      <div className="flex justify-between mt-5 text-red-500">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
