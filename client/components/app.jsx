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

  render() {
    return (
      <Header />
    );
  }
}

export default App;
