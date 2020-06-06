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

  render() {
    return (
      <form>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNewName}/>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="course" placeholder="Course" value={this.state.course} onChange={this.handleNewCourse}/>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="grade" placeholder="Grade" value={this.state.grade} onChange={this.handleNewGrade}/>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    );
  }
}
