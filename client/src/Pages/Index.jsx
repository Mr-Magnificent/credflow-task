import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


function App() {
  return (
    <div>
      <Link to={'./search'}>
        <Button style={{margin: '10px'}} type="primary">Search</Button>
      </Link>
      <Link to={'./course'}>
        <Button style={{margin: '10px'}} type="primary">Show all courses</Button>
      </Link>
    </div>
  );
}

export default App;
