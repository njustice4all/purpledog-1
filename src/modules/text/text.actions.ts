import { createAsyncAction, ActionType } from 'typesafe-actions';

import { ResponseText } from './text.models';

export const GET_TEXT_REQUEST = 'GET_TEXT_REQUEST';
export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAILURE = 'GET_TEXT_FAILURE';
export const actionGetText = createAsyncAction(
  GET_TEXT_REQUEST,
  GET_TEXT_SUCCESS,
  GET_TEXT_FAILURE
)<undefined, ResponseText, undefined>();

const actions = { actionGetText };

export type TextActions = ActionType<typeof actions>;
