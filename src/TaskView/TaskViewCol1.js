import React from 'react';
import './TaskViewCol.css';
import Life from './Life';
import Work from './Work';
import Row from 'react-bootstrap/Row';

export default class TaskViewCol1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='task-view-col'>
        <Row style={{padding: '1.5rem'}}>
          <Life showAll={this.props.showAll} />
          <Work showAll={this.props.showAll} />
        </Row>
      </div>
    );
  }
}