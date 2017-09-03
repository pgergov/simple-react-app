import React, {Component} from 'react';

import {GoodsService} from './GoodsService';

class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodies: []
    };
  }
  componentDidMount() {
    GoodsService.getGoodies().then(goodies =>
      this.setState({goodies: goodies})
    );
  }

  render() {
    const {goodies} = this.state;
    const goodsItems = goodies.map((goody, index) =>
      <p key={index} className="goody-item">
        {goody.name}
      </p>
    );

    return (
      <div className="goodies-container">
        {goodsItems}
      </div>
    );
  }
}

export default Goods;
