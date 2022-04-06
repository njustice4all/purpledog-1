import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestWine, ResponseWine } from './wine.models';

type WhichWine = RequestWine['name'];

export const GET_WINE_REQUEST = 'GET_WINE_REQUEST';
export const GET_WINE_SUCCESS = 'GET_WINE_SUCCESS';
export const GET_WINE_FAILURE = 'GET_WINE_FAILURE';
export const actionGetWine = createAsyncAction(
  GET_WINE_REQUEST,
  GET_WINE_SUCCESS,
  GET_WINE_FAILURE
)<{ name: WhichWine }, { name: WhichWine; results: ResponseWine['results'] }, undefined>();

const actions = { actionGetWine };

export type WineActions = ActionType<typeof actions>;
