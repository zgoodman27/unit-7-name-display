import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(" ");
  const message = `Hello ${fullName}, welcome to my app!`;

  <form>
    <input type="text" id="firstName">
      First Name
    </input>
    <input type="text" id="middleName">
      Middle Name
    </input>
    <input type="text" id="lastName">
      Last Name
    </input>
  </form>;

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
