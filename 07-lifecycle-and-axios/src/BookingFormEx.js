import React from "react";
import axios from 'axios'

// creates a class-based component
export default class BookingFormEx extends React.Component {
  state = {
    name: "",
    age: "teens",
    classes: [],
    ageGroups: [],
    possibleClasses:[]
  };

  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    await this.loadData();
  }

  async loadData() {
    let ageGroupResponse = await axios.get("age-groups.json");
    let classesResponse = await axios.get("classes.json");
    this.setState({
        ageGroups: ageGroupResponse.data,
        possibleClasses: classesResponse.data
    })
    
  }

  renderAgeGroup() {
    let jsx = [];
    for (let ageGroup of this.state.ageGroups) {
      jsx.push(
        <React.Fragment>
          <input
            type="radio"
            name="age"
            value={ageGroup.value}
            onChange={this.updateFormField}
            checked={this.state.age === ageGroup.value}
          />
          <label>{ageGroup.title}</label>
        </React.Fragment>
      );
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateFormField}
            name="name"
          />
        </div>
        <div>
          <label>Age</label>
          {this.renderAgeGroup()}
        </div>
        <div>
          <label>Classes</label>
          {this.state.possibleClasses.map((c, index) => (
            <React.Fragment>
              <input
                type="checkbox"
                name="classes"
                value={c.value}
                onChange={this.updateCheckboxes}
                checked={this.state.classes.includes(c.value)}
              />
              <label>{c.title}</label>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

  // the event object is passed to updateFormField by react when it detects a change in the form control
  updateFormField = event => {
    // event.target refers to the form control that is being changed
    // event.target.name is the name attribute of that form control
    // event.target.value is the value inside that form control
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckboxes = event => {
    // the flow to change array is:
    // 1. make a copy of the array
    // 2. make the changes to the COPY
    // 3. use setState to update the original state variable that points to the array

    // case 1: adding a new checked class (the class wasn't selected before and now is selected)
    // step 1 clone (make a copy) of the array
    //   let copy = [...this.state.classes];

    //   // step 2 : change the  cloned  array
    //   copy.push(event.target.value);

    //   // step 3: set the cloned array into the state, overwriting the original array
    //   this.setState({
    //     classes: copy
    //   })

    // case 1: adding a new checked class to the array
    if (this.state.classes.includes(event.target.value) === false) {
      this.setState({
        classes: [...this.state.classes, event.target.value]
      });
    } else {
      // case 2: if the selected class is in already the classes array, remove
      let cloned = this.state.classes.filter(c => {
        return c !== event.target.value;
      });
      this.setState({
        classes: cloned
      });
    }
  };
}
