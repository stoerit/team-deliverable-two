import React from 'react';
import './App.css';
import LineExample from './ChartOne';

var createReactClass = require('create-react-class');

var MyChart = createReactClass({
  getInitialState: function() {
      return {
          value: 'select'
      }
  },
  change: function(event){
      this.setState({value: event.target.value});
  },
  render: function(){
    return (
      <div id="main">
        <div id="main-2">
          <h6><em>The top 7 world's largest public companies ranked by market value, profit and assets.</em></h6>
          <p>Welcome to our site. Before you get started, we'd like to give you some background information on our project.</p>
          <p>We decided to create a project using Forbes 2018 Global 2000 list because of the profound impact the largest companies of the world have on the global economy.
          We think the data is intriguing, and it gives a clear idea of where companies rank in a global perspective.</p>
          <p>Many will benefit from the presentation of the data, such as, entrepreneurs, top management, business owners and decision makers, and researchers.</p>
          <p>We obtained the data from the following site: https://www.forbes.com/global2000/#49da92b8335d.
          The data is compiled yearly by Forbes, since 2003, using data from FactSet Research systems. 
          FactSet Research systems collects data from the largest public companies in four metrics: sales, profits, assets and market value. 
          Forbes uses specific criteria for each metric to rank the companies.
          According to Forbes, the final database screen was run in early-May of 2018.
          The data presented is the latest 12 months' financial data available.</p>
          <p>The data is useful in that it can answer pertinent questions from the analysis of the list such as:
          Does the USA maintain leadership in key industries? 
          What impact have financial crises had over the Forbes 2000 list?
          What companies might become the international leaders of tomorrow? So on, and so forth.
          The data can also highlight the ever changing geopolitical challenges (like potential trade wars) and landscape.
          in addition, the data gives critical economic and business insight.</p>
          <p>The data was compiled to enable the aforementioned to act upon the data generated.
          Many recognize the benefit in "trending analysis" and long-term data collection strategies. 
          Also, ongoing discovery and analysis leads to business insights and value. Basically, data is knowledge.</p>
          <p>Thank you for visiting our site. Please scroll down to see the data formatted in easy-to-use charts.</p>
        </div>
        <br></br>
  
        <footer className="major container medium">
          <h3>Top 7 Public Companies</h3>
          {/* <canvas id="myChart"></canvas> */}
          <LineExample />
          <p>Please select an option for sorting the data in the dropdown menu below.</p>
          <select onChange={this.change} id="dropdown">
            <option>Please Select</option>
            <option value="profit">Profit</option>
            <option value="marketValue">Market Value</option>
            <option value="assets">Assets</option>
            <option value="sales">Sales</option>
          </select>
        </footer>
        
      </div>
    );
  }
});

/** function App() {

  return (
    <div id="main">
      <div id="main-2">
        <h6><em>The top 7 world's largest public companies ranked by market value, profit and assets.</em></h6>
        <p>Welcome to our site. Before you get started, we'd like to give you some background information on our project.</p>
        <p>We decided to create a project using Forbes 2018 Global 2000 list because of the profound impact the largest companies of the world have on the global economy.
				We think the data is intriguing, and it gives a clear idea of where companies rank in a global perspective.</p>
        <p>Many will benefit from the presentation of the data, such as, entrepreneurs, top management, business owners and decision makers, and researchers.</p>
        <p>We obtained the data from the following site: https://www.forbes.com/global2000/#49da92b8335d.
        The data is compiled yearly by Forbes, since 2003, using data from FactSet Research systems. 
        FactSet Research systems collects data from the largest public companies in four metrics: sales, profits, assets and market value. 
        Forbes uses specific criteria for each metric to rank the companies.
        According to Forbes, the final database screen was run in early-May of 2018.
        The data presented is the latest 12 months' financial data available.</p>
        <p>The data is useful in that it can answer pertinent questions from the analysis of the list such as:
        Does the USA maintain leadership in key industries? 
        What impact have financial crises had over the Forbes 2000 list?
        What companies might become the international leaders of tomorrow? So on, and so forth.
        The data can also highlight the ever changing geopolitical challenges (like potential trade wars) and landscape.
        in addition, the data gives critical economic and business insight.</p>
        <p>The data was compiled to enable the aforementioned to act upon the data generated.
        Many recognize the benefit in "trending analysis" and long-term data collection strategies. 
        Also, ongoing discovery and analysis leads to business insights and value. Basically, data is knowledge.</p>
        <p>Thank you for visiting our site. Please scroll down to see the data formatted in easy-to-use charts.</p>
      </div>
      <br></br>

      <footer className="major container medium">
        <h3>Top 7 Public Companies</h3>
    
        <LineExample />
        <p>Please select an option for sorting the data in the dropdown menu below.</p>
        <select onChange="this." id="dropdown">
          <option>Please Select</option>
          <option value="profit">Profit</option>
          <option value="marketValue">Market Value</option>
          <option value="assets">Assets</option>
          <option value="sales">Sales</option>
        </select>
      </footer>
      
    </div>
  );
}

export default App;  **/

export default MyChart;
