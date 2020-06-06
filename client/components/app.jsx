/* eslint-disable no-console, no-unused-vars */

import React from 'react';

class Header extends React.Component {
  render() {
    return <h1>Student Grade Table</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;
