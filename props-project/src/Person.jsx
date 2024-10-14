import { Component } from "react";

class Person extends Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    const { persons} = this.props; 

    return (
      <div>
        <h2 className="text-center mb-5">List Of Students</h2>

        <table border={1} className="table w-50" align="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Course</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.course}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Person;
