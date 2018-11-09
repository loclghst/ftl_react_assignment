import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
    componentDidMount() {
      this.drawChart();
    }

    drawChart() {
      const data = this.props.data;
      const w = 1000;
      const h =400;

      const svg = d3.select("#barChart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", 0)
        .attr("width", 25)
        .attr("height", (d, i) => d)
        .attr("fill", "green")
        .attr("height", (d, i) => d * 10)
        .attr("y", (d, i) => h - 10 * d);


    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - (10 * d) - 3)

}

    render(){
      return <div id='barChart'></div>
    }
  }

export default BarChart;
