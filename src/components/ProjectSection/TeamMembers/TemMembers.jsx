import { useState, useEffect } from "react";

function TeamMembers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  }, []);

  return <div>Team Members</div>;
}

export default TeamMembers;