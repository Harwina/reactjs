import React from "react";

const View = ({ records, onEdit }) => {
  return (
    <div className="view">
      <h2>Records</h2>
      {records.length === 0 ? (
        <p>No records found!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Hobbies</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.city}</td>
                <td>{record.hobbies.join(", ")}</td>
                <td>
                  <img
                    src={record.imageUrl}
                    alt={record.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <button onClick={() => onEdit(record)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default View;
