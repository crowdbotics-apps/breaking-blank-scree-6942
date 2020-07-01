import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView67518Reducer from '../features/CalendarView67518/redux/reducers';
import CalendarView77517Reducer from '../features/CalendarView77517/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView67518: CalendarView67518Reducer,
CalendarView77517: CalendarView77517Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});