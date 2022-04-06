import { createReducer } from 'typesafe-actions';

import { ITextState } from './text.models';
import { RootAction } from 'modules/rootAction';
import { GET_TEXT_REQUEST, GET_TEXT_SUCCESS, GET_TEXT_FAILURE } from './text.actions';

const initialState = {};

const textReducer = createReducer<ITextState, RootAction>(initialState, {
  [GET_TEXT_REQUEST]: (state) => initialState,
  [GET_TEXT_SUCCESS]: (state, action) => ({ ...state, ...action.payload.results }),
  [GET_TEXT_FAILURE]: () => initialState,
});

export default textReducer;
