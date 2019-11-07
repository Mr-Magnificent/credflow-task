import React, { Component } from 'react';
import { AutoComplete, Tag, Card } from 'antd';
import axios from 'axios';
import propType from 'prop-types';

const Option = AutoComplete.Option;

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      studentDetails: undefined
    };
  }

  change = async (e) => {
    try {
      const { data } = await axios.get('/api/student/search-by-name/' + e);
      this.setState({
        suggestions: data || []
      });
    } catch (err) {
      console.log(err);
    }
  }

  select = async (e) => {
    console.log(this.state.suggestions[e].id);
    const { data } = await axios.get(`/api/student/${this.state.suggestions[e].id}`);
    this.setState({
      studentDetails: data
    });
  }

  render() {
    const children = this.state.suggestions.map((student, idx) => <Option key={idx}>{student.name}</Option>);
    return (
      <>
        <h1>Search a student by name</h1>
        <AutoComplete
          dataSource={this.state.suggestions}
          style={{ width: 200 }}
          onChange={this.change}
          onSearch={this.search}
          onSelect={this.select}
          size='large'
          placeholder="search name"
        >
          {children}
        </AutoComplete>
        <StudentDetails student={this.state.studentDetails} />
      </>
    );
  }
}

function StudentDetails(props) {
  console.log(props.student);
  if (!props.student) {
    return (
      <div></div>
    );
  }

  const { courses } = props.student;
  return (
    <Card title={props.student.name} style={{ width: 500 }}>
      <p><strong>Age:</strong>&nbsp;{props.student.age}</p>
      {
        courses.map((subject, idx) => (
          <Tag key={idx} color='geekblue'>{subject.course_name}</Tag>
        ))
      }
    </Card>
  );
}

StudentDetails.propTypes = {
  student: {
    name: propType.string,
    courses: propType.arrayOf(propType.object),
    age: propType.number
  }
};
