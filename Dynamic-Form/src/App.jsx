import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState([{ id: Math.floor(Math.random() * 10000), name: "", phone: "" }]);

  const addMore = () => {
    const newField = {
      id: Math.floor(Math.random() * 10000),
      name: "",
      phone: ""
    };
    setInputs([...inputs, newField]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.id}>
            <input
              type="text"
              placeholder='Name'
            />
            <input
              type="text"
              placeholder='Phone'
            />
            <br /><br />
          </div>
        ))}
        <button type="button" onClick={addMore}>Add More</button>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
