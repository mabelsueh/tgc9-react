import React from "react";

export default class FormAdvanced extends React.Component {
  state = {
    name: "",
    email: "",
    color: "",
    time: "morning",
    fruits: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Favourite Color</label>
          <input
            type="radio"
            name="color"
            value="red"
            onChange={this.updateFormField}
            checked={this.state.color === 'red'}
          />
          <label>Red</label>
          <input
            type="radio"
            name="color"
            value="green"
            onchange={this.updateFormField}
            checked = { this.state.color === 'green'}
          />
          <label>Green</label>
          <input
            type="radio"
            name="color"
            value="blue"
            onChange={this.updateFormField} 
            checked = {this.state.color==='blue'}
          />
          <label>Blue</label>
        </div>
        <div>
          <label>
            Favorite time of the day (morning, afternoon, evening, early
            morning)
          </label>
          <input
            type="radio"
            name="time"
            value="morning"
            onChange={this.updateFormField}
            checked={this.state.time==='morning'}
          />
          <label>Morning</label>
          <input
            type="radio"
            name="time"
            value="afternoon"
            onChange={this.updateFormField}
            checked={this.state.time==="afternoon"}
          />
          <label>Afternoon</label>
          <input
            type="radio"
            name="time"
            value="evening"
            onChange={this.updateFormField}
            checked={this.state.time==='evening'}
          />
          <label>Evening</label>
          <input
            type="radio"
            name="time"
            value="early-morning"
            onChange={this.updateFormField}
            checked={this.state.time==='early-morning'}
          />
          <label>Early Morning</label>
        </div>
      </React.Fragment>
    );
  }

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
