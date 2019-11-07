import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';


export default class Course extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

    columns = [
      { title: 'Course Name', dataIndex: 'course_name', key: 'course name' },
      { title: 'Course Instructor', dataIndex: 'teacher_name', key: 'teacher name' },
      { title: 'Credits', dataIndex: 'credits', key: 'credits' }
    ]

    getData = async() => {
      const { data } = await axios.get('/api/subjects');
      console.log('data', data);
      this.setState({
        data: data
      });
    }

    expandedRowRender = (record, index) => {
      console.log(record, index);

      const studentCols = [
        { title: 'Student Name', dataIndex: 'name', key: 'student_name' },
        { title: 'Age', dataIndex: 'age', key: 'age' }
      ];

      return <Table columns={studentCols} dataSource={this.state.data[index].students} pagination={false} />;
    }

    render() {
      return (
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          expandedRowRender={this.expandedRowRender}
        />
      );
    }
}
