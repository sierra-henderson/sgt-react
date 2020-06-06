/* eslint-disable no-console, no-unused-vars */

import React from 'react';

class Header extends React.Component {
  render() {
    return <h1>Student Grade Table</h1>;
  }
}

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
      </tr>
    );
  }
}

class GradeTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.grades.map(grade => {
              return <Grade key={grade.id} grade={grade}/>;
            })
          }
        </tbody>
      </table>
    );
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
