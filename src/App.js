import React from "react";
import { StoreProvider, useStore } from "webpack_module_federation/store";

const App = () => {
  const { users } = useStore();
  console.log(users, 'users');


  return (
    <div style={{
      margin: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "cyan"
    }}>
      {/* <h1 >{count}</h1> */}
      <div>
        <button
          // onClick={increment}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default App;

