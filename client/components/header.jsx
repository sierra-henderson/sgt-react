import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-between align-items-baseline border-bottom">
        <h1 className="mb-4">Student Grade Table</h1>
        <h3 className="text-right">Average Grade<span className="badge badge-secondary ml-2">{this.props.average}</span></h3>
      </div>
    );
  }
}
