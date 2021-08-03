import * as types from '../constants/ActionTypes';

var initialState = {
    sortBy : 'name',
    sortValue : 1
};
var myReducers = ( state = initialState, action ) => {
    switch(action.type) {
        case types.SORT:    
            return {
                sortBy : action.sort.sortBy,
                sortValue : action.sort.sortValue
            };
        default: 
            return state;
    }
};

export default myReducers;