/* eslint-disable no-console, no-unused-vars */

import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  componentDidUpdate() {
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
    } else {
      return 'N/A';
    }
  }

  deleteGrade(id) {
    fetch(`/api/grades/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(id => {
        this.setState({
          grades: this.state.grades.filter(el => el.id !== id)
        });
      });
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={averageGrade}/>
        <div className="row mt-4">
          <div className="col-md-8">
            <GradeTable deleteGrade={this.deleteGrade} grades={this.state.grades} />
          </div>
          <div className="col-md-4">
            <h3 className="mb-4">Add Grade</h3>
            <GradeForm onSubmit={this.addNewGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
