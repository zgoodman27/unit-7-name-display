import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState(""); //set up useState for first name
  const [middleName, setMiddleName] = useState("");//set up useState for middle name
  const [lastName, setLastName] = useState("");//set up useState for last name
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(" "); //join the names together with a space between them
  const message = `Hello ${fullName}, welcome to my app!`; //message response
  //build the form with onchange event handlers
  return (
    <>
      <form>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="middleName"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" id="submitNameButton">Submit</button>
      </form>
      <div>
        <>{message}</>
      </div>
    </>
  );
}

export default App;
