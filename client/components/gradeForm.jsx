import React from 'react';

export default class GradeForm extends React.Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="course" placeholder="Course" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="grade" placeholder="Grade" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    );
  }
}
