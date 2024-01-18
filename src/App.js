// import { MyComponent } from "./MyComponent";
// function App() {

//   const Data = ["Aman"  ,"BCA" , 22];
//   return (
//     <>
//     <MyComponent Properties = {Data} />
//     </>
//   );
// }
// export default App;

import React, { useState } from "react";
const App = () => {

  
  const [Count , setCount] = useState(0);
  const [allchecked, setAllChecked] = React.useState([]);
  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }
  return (
    <div>
      {Count == 1 ? (
        <div>
          <button onClick={()=>{
            setCount(0)
          }}>Back</button>
        </div>
      ) : (
        <div>
          <h4>
            {" "}
            Creating the{" "}
            <i>
              {" "}
              Custom controlled checkbox and handling the multiple checkboxes{" "}
            </i>{" "}
            in the React application{" "}
          </h4>
          <div>
            <input defaultChecked ={ allchecked.includes("One") }  value="One" type="checkbox" onChange={handleChange} />
            <span> One </span>
          </div>
          <div>
            <input value="Two" type="checkbox" onChange={handleChange} />
            <span> Two </span>
          </div>
          <div>
            <input value="Three" type="checkbox" onChange={handleChange} />
            <span> Three </span>
          </div>
          <div>
            <input value="Four" type="checkbox" onChange={handleChange} />
            <span> Four </span>
          </div>
          <div>
            <input value="Five" type="checkbox" onChange={handleChange} />
            <span> Five </span>
          </div>
          <div>The all checked values are {allchecked.join(" , ")}</div>
          <button onClick={()=>{
            setCount(1)
          }}>Next</button>
        </div>
        
      )}
    </div>
  );
};
export default App;
