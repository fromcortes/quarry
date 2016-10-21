import React, { Component } from 'react';

import CoffeePost from '../CoffeePost/index.jsx'
// import LogoImg from '../../img/roast.jpg';

class Coffee extends Component {
  render() {

    const imgTwo = require('../../img/las-colinas.jpg');
    const imgOne = require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end">
          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            rating="8 / 10"
            readLink="#"
            coffeeImageSource={imgTwo} />

          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            rating="9 / 10"
            readLink="#"
            coffeeImageSource={imgOne} />
        </div>
      </div>
    );
  }
}

export default Coffee;
