import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
const myReducers = combineReducers({
     tasks : tasks,
     isDisplayForm : isDisplayForm,
     itemEditing : itemEditing,
     filterTable : filterTable,
     search : search,
     sort : sort
});
     
export default myReducers;