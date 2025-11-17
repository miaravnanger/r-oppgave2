import { useState } from "react";
import styles from "./styles/Users.module.css";
import UserTable from "./UserTable.jsx";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
  });

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.username && newUser.email) {
      setUsers((prev) => [...prev, newUser]);
      setNewUser({
        username: "",
        email: "",
      });
    } else {
      alert("please fill inn all fields");
    }
  };

  return (
    <div className={styles.userBody}>
      <h2>Users:</h2>
      <UserTable users={users} />
      <div className={styles.formFlex}>
        <h3>Add a new user</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              value={newUser.username}
              placeholder="Enter your name"
              onChange={handleUpdate}
              type="text"
              name="username"
            />
          </label>
          <label htmlFor="">
            <input
              value={newUser.email}
              placeholder="Enter your email"
              onChange={handleUpdate}
              type="text"
              name="email"
            />
          </label>
          <br />
          <button
            className={styles.submit}
            type="submit"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
