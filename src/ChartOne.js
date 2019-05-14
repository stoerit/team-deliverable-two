import React from 'react';

import { Line } from 'react-chartjs-2';
import MyChart from './App.js';
var createReactClass = require('create-react-class');

let listObject = require('./assets/js/data.json');

listObject.sort(function(a,b) {
    return b.Profits - a.Profits;
});

const data = {
    labels: [listObject[0].Company, listObject[1].Company, listObject[2].Company, listObject[3].Company, listObject[4].Company, listObject[5].Company, listObject[6].Company],
    datasets: [{
        label: "Profit in Billions",
        backgroundColor: 'rgb(190, 190, 200)',
        borderColor: 'rgb(255, 99, 132)',
        data: [listObject[0].Profits, listObject[1].Profits, listObject[2].Profits, listObject[3].Profits, listObject[4].Profits, listObject[5].Profits, listObject[6].Profits],
    }]
};

export default createReactClass({
    
    
    displayName: 'LineExample',
  
    render() {
      return (
        <div>
          <Line data={data} />
        </div>
      );
    }
  });