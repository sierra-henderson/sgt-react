import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNewName = this.handleNewName.bind(this);
    this.handleNewCourse = this.handleNewCourse.bind(this);
    this.handleNewGrade = this.handleNewGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewName() {
    this.setState({
      name: event.target.value
    });
  }

  handleNewCourse() {
    this.setState({
      course: event.target.value
    });
  }

  handleNewGrade() {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseFloat(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset() {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-user"></i></div>
          </div>
          <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNewName}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="far fa-list-alt"></i></div>
          </div>
          <input type="text" className="form-control" id="course" placeholder="Course" value={this.state.course} onChange={this.handleNewCourse}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-graduation-cap"></i></div>
          </div>
          <input type="text" className="form-control" id="grade" placeholder="Grade" value={this.state.grade} onChange={this.handleNewGrade}/>
        </div>
        <button type="submit" className="btn btn-success">Add</button>
        <button type="reset" className="btn btn-outline-secondary ml-2">Cancel</button>
      </form>
    );
  }
}
