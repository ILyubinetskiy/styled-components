import React, { useState, useEffect } from "react";
import { StoreProvider, useStore } from "webpack_module_federation/store";

const App = () => {
  const [localUsers, setLocalUsers] = useState([])
  const { users, onIncrement, value } = useStore();
  
  useEffect(() => {
    setLocalUsers([
      ...users
    ])
  }, [users]);

  return (
    <>
      <div>{value}</div>
      <button onClick={onIncrement}>Click</button>
      <ul style={{
        backgroundColor: "cyan"
      }}>
        {localUsers.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </>
  )
}

export default App;

