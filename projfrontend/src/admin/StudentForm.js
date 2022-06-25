import React, { Component } from 'react';

class StudentForm extends Component {
  render() {
    return (
      <div>
        <label>Enter your name:
        <input type="text" />
        </label>
        <label>Enter your Roll No.:
        <input type="text" />
        </label>
      </div>
    );
  }
}

export default StudentForm;