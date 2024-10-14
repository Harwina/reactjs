import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, inputs]);

    setInputs({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <form action="" className="text-center mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <p></p>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <p></p>
        <button className="ms-2" type="submit">
          Submit
        </button>
      </form>

      <div align="center" className="mt-5">
        <table border={1} className="table w-50">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action`</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((val, index) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
