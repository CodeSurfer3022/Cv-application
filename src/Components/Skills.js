import React, {Component} from "react";

function handleClick(e) {
  console.log(e.target);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.remove('none');
  form.querySelector('input').select();
  e.target.classList.add('none');
}

function cancel(e) {
  e.preventDefault();
  const btn = document.querySelector('.skills').querySelector('.addForm');
  console.log(btn);
  const form = document.querySelector('form[name="skillsForm"]');
  form.classList.add('none');
  btn.classList.remove('none');
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  addSkill = (e) => {
    e.preventDefault();
    const skill = document.skillsForm.skill.value;
    this.setState((prevState) => {
      return { skills: [...prevState.skills, skill]}
    })
    const close = document.querySelector('.skills').querySelector('.closeForm');
    close.click();
  }

  removeSkill = (e) => {
    const div = e.target.parentElement;
    const key = div.getAttribute('key');
    this.setState(prevState => {
      return {skills: prevState.skills.splice(key,1)}
    })
    console.log(key);
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <hr />
        <div className="flex">
          {this.state.skills.map((skill, index) =>
            <div className="skill" key={index}>
              <span>{skill}</span>
              <button onClick={this.removeSkill}>x</button>
            </div>)
          }
        </div>
        <form className="none" name="skillsForm">
          <div className="skillsForm">
            <input id="skill" placeholder="Add your top skills!" name="skill"/>
            <button className="closeForm" onClick={cancel}>Cancel</button>
            <button onClick={this.addSkill}>+ skill</button>
          </div>
        </form>
        <button className="addForm" onClick={handleClick}>Add skills</button>
      </div>
    )
  }
}

export default Skills;
