import {takeLatest} from "@redux-saga/core/effects";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import {api, PaintingType} from "../api/api";

export type PaintingsStateType = {
    items: Array<PaintingType>
    error: string | null
};
const initialState: PaintingsStateType = {
    items: [],
    error: null,
};

const slice = createSlice({
    name: 'paintingsReducer',
    initialState: initialState,
    reducers: {
        // saga init actions
        initSagaGetAllPaintingsAC(state, action: PayloadAction<{}>) {
            return state;
        },

        // actions
        getAllPaintingsAC(state, action: PayloadAction<Array<PaintingType>>) {
            return {
                ...state,
                items: action.payload
            }
        },
        setErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
    }
});

export const paintingsReducer = slice.reducer;
export const {setErrorAC, initSagaGetAllPaintingsAC, getAllPaintingsAC} = slice.actions;

function* workerGetAllPaintings({payload: payload}) {
    try {
        //const paintings = yield api.getAllPaintings();
        //yield put(getAllPaintingsAC(payload.data.paintings.items));
    } catch (error) {
        yield put(setErrorAC(error.message));
    }
}

export function* watchGetAllPaintings() {
    yield takeLatest(initSagaGetAllPaintingsAC, workerGetAllPaintings);
}
