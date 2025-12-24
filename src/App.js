import "./App.css";
import React from "react";

export default class App extends React.Component {
  // Create state for the expenses here

  render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
          </div>
        </div>
      </>
    );
  }
}
