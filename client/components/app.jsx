/* eslint-disable no-console, no-unused-vars */

import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

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
      .then(data => {
        this.setState({
          grades: data
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
