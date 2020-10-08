import {all, call} from 'redux-saga/effects';
import { watchGetAllPaintings } from './paintingsReducer';

export function* rootSaga() {
    yield all([
        call(watchGetAllPaintings),
    ]);
}
