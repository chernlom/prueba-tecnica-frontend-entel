import React from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section>
        <h1>Usuarios</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}
