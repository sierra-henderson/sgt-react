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
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.concat([data])
        });
      });
  }

  getAverageGrade() {
    if (this.state.grades.length > 0) {
      let total = 0;
      for (let i = 0; i < this.state.grades.length; i++) {
        total += this.state.grades[i].grade;
      }
      return Math.ceil(total / this.state.grades.length);
    }
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={averageGrade}/>
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
