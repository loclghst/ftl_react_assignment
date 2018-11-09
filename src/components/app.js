import React from "react";
import { Component } from "react";

import EmployeeList from "../containers/employee-list";
import EmployeeDetail from '../containers/employee-detail'


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="fluid-container">
         <div className="col-md-4">
          <EmployeeList />
         </div>
         <div className="col-md-8">
           <div className="row">
            <EmployeeDetail />
           </div>

         </div>
      </div>
    );
  }
}
