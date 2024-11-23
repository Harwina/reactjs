import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewPage = () => {

    const navigate=useNavigate();

    const AddPage = () =>{
        navigate("/")
    }
  const items = useSelector((state) => state.crud.items);

  return (
    <div>
      <h1 align="center">View Page</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table><p></p>
    <div align="center"><button onClick={AddPage}> Go To Add New Data</button></div>
    </div>
  );
};

export default ViewPage;
