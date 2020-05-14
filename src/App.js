import React, {Component} from 'react';
import {Message} from './Message'; 

export default class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      counterLeft: 0, 
      counterRight: 0
    }
  }

  incrementCounter = (counter) => {
    if (counter === 'left') {
      this.setState({counterLeft: this.state.counterLeft + 1}); 
    } else {
      this.setState({counterRight: this.state.counterRight + 1}); 
    }
  }

  render() {
    console.log('Render App Component'); 

    return (
      <div className="container text-center">
        <div className="row p-2">
          <div className="col-6">
            <Message
              message={`left: ${this.state.counterLeft}`}
              callback={() => this.incrementCounter('left')}
              text='Increment Left Counter'
            />
          </div>

          <div className="col-6">
            <Message
              message={`right: ${this.state.counterRight}`}
              callback={() => this.incrementCounter('right')}
              text='Increment Right Counter'
            />
          </div>
        </div>
      </div>
    )
  }
}
