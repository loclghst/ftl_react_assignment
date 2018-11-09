import { combineReducers } from "redux";
import NamesReducer from "./reducer_names";
import ActiveEmployee from './reducer_active_employee';

const rootReducer = combineReducers({
  employees: NamesReducer,
  activeEmployee: ActiveEmployee

});
export default rootReducer;

