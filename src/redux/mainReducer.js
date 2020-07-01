import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView77517Reducer from '../features/CalendarView77517/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView77517: CalendarView77517Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});