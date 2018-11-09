import React , {Component} from 'react';
import { connect } from 'react-redux';
import BarChart from '../components/barChart';


class EmployeeDetail extends Component{
    render(){

        if(!this.props.employee){
            return <div>Select a Employee to get started</div>
        }
        return (
            <div>
                <h3>Details for</h3>
                <div>Name: {this.props.employee.name}</div>
                <div>
                  <BarChart data={this.props.employee.data} />
                </div>
                <div className="row">
             <div className="col-md-6">
               <button className="btn primary">Week</button>
               <button className="btn primary">Month</button>
             </div>
             <div className="col-md-6">
               <button className="btn primary">Prev</button>
               <button className="btn primary">Next</button>
             </div>
           </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        employee: state.activeEmployee
    }

}

export default connect(mapStateToProps)(EmployeeDetail);
