import React from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default class App extends React.Component {
  // State to store all expenses
  state = {
    expenses: []
  };

  // Function to add a new expense
  addExpense = (expense) => {
    this.setState((prevState) => ({
      expenses: [expense, ...prevState.expenses]
    }));
  };

  // Function to delete an expense by id
  deleteExpense = (id) => {
    this.setState((prevState) => ({
      expenses: prevState.expenses.filter(
        (expense) => expense.id !== id
      )
    }));
  };

  render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>

        <div className="App">
          {/* Expense Form */}
          <ExpenseForm addExpense={this.addExpense} />

          <div className="expenseContainer">
            {/* Expense Info */}
            <ExpenseInfo expenses={this.state.expenses} />

            {/* Expense List */}
            <ExpenseList
              expenses={this.state.expenses}
              deleteExpense={this.deleteExpense}
            />
          </div>
        </div>
      </>
    );
  }
}
