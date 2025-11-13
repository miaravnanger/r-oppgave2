import { useState } from "react";
import styles from "./styles/Users.module.css"
<styles />
export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({});

	function handleUpdate (e){
		const {name, value} = e.target
		setNewUser(prev =>({...prev, [name]: value}))
	}
function onAdd () {
	if (newUser.username && newUser.email){
	 setUsers((prev) => [...prev, newUser]);
   setNewUser({});
	} else {
		alert("please fill inn all fields")
	}

}
  return (
    <div className={styles.userBody}>
      <section>
        <h2>Users:</h2>
        {users.map((user, i) => {
          return (
            <ul style={{ listStyle: "none" }} key={i}>
              <li>Name: {user.username}</li>
              <li>Email: {user.email}</li>
            </ul>
          );
        })}
      </section>
      <h3>Add a new user</h3>
      <form>
        <label htmlFor="">
          <input
            type="text"
            placeholder="enter your name"
            onChange={handleUpdate}
            name="username"
            value={newUser.username || ""}
          />
        </label>
				<label htmlFor="">
        <input
          type="text"
          placeholder="enter your email"
          onChange={handleUpdate}
          name="email"
          value={newUser.email || ""}
        />
				</label>
        <br />
        <button onClick={onAdd}>Submit</button>
      </form>
    </div>
  );
}
