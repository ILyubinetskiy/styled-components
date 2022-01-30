import React from "react";
import { tests } from "store/store";

const App = () => {
  // const { users } = useStore();
  tests()
  // console.log('object', users)
  return (
    <div style={{
      margin: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "cyan"
    }}>
      <h1 >styled-components</h1>
    </div>
  )
}

export default App;

