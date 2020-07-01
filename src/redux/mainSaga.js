import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView67518Saga from '../features/CalendarView67518/redux/sagas';
import CalendarView77517Saga from '../features/CalendarView77517/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView67518Saga,
CalendarView77517Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}