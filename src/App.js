import React from "react";
import { StoreProvider, useStore } from "webpack_module_federation/store";

const App = () => {
  const { users } = useStore();

  return (
    <ul style={{
      backgroundColor: "cyan"
    }}>
      {users.map(user => (<li key={user.id}>{user.name}</li>))}
    </ul>
  )
}

export default App;

