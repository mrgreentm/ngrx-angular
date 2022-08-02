import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserInterface } from './../../models/users.interface';
import * as fromUsersActions from '../users/users.actions';

export interface UsersState {
  users: UserInterface[];
  user: UserInterface | null;
  error: string;
}

export const initialUsersState: UsersState = {
  users: [],
  user: null,
  error: '',
};

const _usersReduce = createReducer(
  initialUsersState,
  //LOAD USERS
  on(fromUsersActions.LoadUsersSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsersActions.LoadUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //LOAD USER
  on(fromUsersActions.LoadUser, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsersActions.LoadUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //CREATE USER
  on(fromUsersActions.CreateUser, (state, { payload }) => ({
    ...state,
    usuarios: [...state.users, payload],
    error: '',
  })),
  on(fromUsersActions.CreateUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //UPDATE USER
  on(fromUsersActions.UpdateUser, (state, { payload }) => ({
    ...state,
    usuarios: [...state.users].map((row) => {
      return row.id === payload.id ? payload : row;
    }),
    error: '',
  })),
  on(fromUsersActions.UpdateUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //DELETE USER
  on(fromUsersActions.DeleteUserSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.users].filter((user) => user.id !== payload),
    error: '',
  })),
  on(fromUsersActions.DeleteUserFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function usersReduce(state = initialUsersState, action: Action) {
  return _usersReduce(state, action);
}

const getUsersFeatureState = createFeatureSelector<UsersState>(
  'users'
)

export const getUsers = createSelector(
  getUsersFeatureState,
  (state: UsersState) => state.users
)
export const getUser = createSelector(
  getUsersFeatureState,
  (state: UsersState) => state.user
)
export const getUserFail = createSelector(
  getUsersFeatureState,
  (state: UsersState) => state.error
)
