import React, { useState, useEffect } from "react";
import { useStore } from "webpack_module_federation/store";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const App = () => {
  const [localUsers, setLocalUsers] = useState([])
  const { users, onIncrement, value } = useStore();

  useEffect(() => {
    setLocalUsers([
      ...users
    ])
  }, [users]);
  
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'flex',
        'text-align': 'center'
      }}
    >
      <div>{value}</div>
      <Button
        variant="contained"
        color="success"
        onClick={onIncrement}
      >Click</Button>
          <ul style={{
            backgroundColor: "cyan"
          }}>
            {localUsers.map(user => (<li key={user.id}>{user.name}</li>))}
          </ul>
    </Box>
  )
};

export default App;

