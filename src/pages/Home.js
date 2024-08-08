import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const users = useOutletContext();  // Access data passed from the parent component

  // Map through users and render UserCard for each user
  const userList = users.map(user => <UserCard key={user.id} user={user} />);

  return (
    <main>
      <h1>Home!</h1>
      <Outlet />  {/* Render nested routes here, like UserProfile */}
      {userList}
    </main>
  );
};

export default Home;

