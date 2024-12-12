import React, { useState } from "react";
import Login from "./components/Login";
import Add from "./components/Add";
import View from "./components/View";
import Edit from "./components/Edit";
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({}); // For user data after login
  const [records, setRecords] = useState([]); // Array to store all added data
  const [editData, setEditData] = useState(null); // Data to edit

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUserData(data); // Store logged-in user data
  };

  const handleAddRecord = (record) => {
    setRecords([...records, record]);
  };

  const handleEditRecord = (updatedRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
    setEditData(null);
  };

  const handleEditButtonClick = (record) => {
    setEditData(record);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : editData ? (
        <Edit record={editData} onSave={handleEditRecord} />
      ) : records.length > 0 ? (
        <View
          records={records}
          onAddNew={() => setIsLoggedIn(true)}
          onEdit={handleEditButtonClick}
        />
      ) : (
        <Add onAdd={handleAddRecord} />
      )}
    </div>
  );
}

export default App;
