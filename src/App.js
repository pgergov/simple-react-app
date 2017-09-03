import React, {Component} from 'react';
import {Button} from 'reactstrap';

import GoodsComponent from './Goods';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGoodies: false
    };
  }

  render() {
    const {showGoodies} = this.state;
    const goodsComponent = showGoodies ? <GoodsComponent /> : '';

    return (
      <div className="App">
        <p className="App-intro">
          <Button
            data-test="show-goodies-button"
            onClick={() => this.setState({showGoodies: !showGoodies})}>
            {showGoodies ? 'Hide  goodies' : 'Show goodies'}
          </Button>
        </p>
        <div>
          {goodsComponent}
        </div>
      </div>
    );
  }
}

export default App;
