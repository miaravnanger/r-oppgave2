import styles from "./styles/UserTable.module.css"

export default function UserTable({users}) {
    return (
    <table className={styles.userTable}>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, i) => (
      <tr key={i}>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    ))}
  </tbody>
</table>
);
}


