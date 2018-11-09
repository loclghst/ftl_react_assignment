import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectEmployee } from '../actions/index'
import { bindActionCreators } from 'redux';

class EmployeeList extends Component{
    renderList(){
        return this.props.employees.map((employee) => {
                return (
                <li
                onClick={() => {this.props.selectEmployee(employee)} }
                key={employee.name}
                className='list-group-item'>
                {employee.name}
                </li>
                );
            });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        employees: state.employees
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({selectEmployee: selectEmployee}, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
