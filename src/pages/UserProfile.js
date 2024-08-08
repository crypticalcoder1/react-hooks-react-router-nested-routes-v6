import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();  // Extract userId from route parameters
  const users = useOutletContext();  // Access user data passed via Outlet context

  // Find the specific user from the list of users
  const user = users.find(user => user.id === parseInt(id));

  // Display loading text if user is not found or still loading
  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <aside>
      <h1>{user.name}</h1>
      <p>{user.email}</p> {/* Optional: Display additional user information */}
    </aside>
  );
}

export default UserProfile;
