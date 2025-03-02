import React from "react";
import PropertyForm from "./PropertyForm.js";
import PropertyList from "./PropertyList.js";

const App = () => {
  return (
    <div>
      <h1>Real Estate Property Upload</h1>
      <PropertyForm />
      <PropertyList />
    </div>
  );
};

export default App;
