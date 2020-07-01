import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth77519Reducer from '../features/EmailAuth77519/redux/reducers';
import CalendarView77517Reducer from '../features/CalendarView77517/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth77519: EmailAuth77519Reducer,
CalendarView77517: CalendarView77517Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});