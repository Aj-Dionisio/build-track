import { useState, useEffect } from "react";
import styles from './styles.module.css'

function TeamMembers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  }, []);

  return (
    <>
      <div className={styles.teamContainer}>Team Members</div>
      <div className={styles.teamMembers}>
        {users.map((user) => (
          <img
            key={user.login.uuid}
            src={user.picture.large}
            alt={user.name.first}
          />
        ))}
      </div>
    </>
  )
}

export default TeamMembers;