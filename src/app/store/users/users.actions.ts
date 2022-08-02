import { UserInterface } from './../../models/users.interface';
import { createAction, props } from '@ngrx/store';

export const enum usersTypeActions {
  LOAD_USERS = '[LOAD_USERS] LOAD Users',
  LOAD_USERS_SUCCESS = '[LOAD_USERS_SUCCESS] LOAD Users with success',
  LOAD_USERS_FAIL = '[LOAD_USERS_FAIL] Dont LOAD Users',

  LOAD_USER = '[LOAD_USER] LOAD User',
  LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] LOAD User with success',
  LOAD_USER_FAIL = '[LOAD_USER_FAIL] Dont LOAD User',

  CREATE_USER = '[CREATE_USER] CREATE User',
  CREATE_USER_SUCCESS = '[CREATE_USER_SUCCESS] CREATE User with success',
  CREATE_USER_FAIL = '[CREATE_USER_FAIL] Dont CREATE User',

  UPDATE_USER = '[UPDATE_USER] UPDATE User',
  UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] UPDATE User with success',
  UPDATE_USER_FAIL = '[UPDATE_USER_FAIL] Dont UPDATE User',

  DELETE_USER = '[DELETE_USER] DELETE User',
  DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] DELETE User with success',
  DELETE_USER_FAIL = '[DELETE_USER_FAIL] Dont DELETE User',
}

//LOAD USERS //////////////////////////////////////
export const LoadUsers = createAction(usersTypeActions.LOAD_USERS);

export const LoadUsersSuccess = createAction(
  usersTypeActions.LOAD_USERS_SUCCESS,
  props<{ payload: UserInterface[] }>()
);

export const LoadUsersFail = createAction(
  usersTypeActions.LOAD_USERS_FAIL,
  props<{ error: string }>()
);

//LOAD USER //////////////////////////////////////
export const LoadUser = createAction(
  usersTypeActions.LOAD_USER,
  props<{ payload: number }>()
);

export const LoadUserSuccess = createAction(
  usersTypeActions.LOAD_USER_SUCCESS,
  props<{ payload: UserInterface }>()
);

export const LoadUserFail = createAction(
  usersTypeActions.LOAD_USER_FAIL,
  props<{ error: string }>()
);

//CREATE USER ///////////////////////////////////
export const CreateUser = createAction(
  usersTypeActions.CREATE_USER,
  props<{ payload: UserInterface }>()
);

export const CreateUserSuccess = createAction(
  usersTypeActions.CREATE_USER_SUCCESS,
  props<{ payload: UserInterface }>()
);

export const CreateUserFail = createAction(
  usersTypeActions.CREATE_USER_FAIL,
  props<{ error: string }>()
);

//UPDATE USER ///////////////////////////////////
export const UpdateUser = createAction(
  usersTypeActions.UPDATE_USER,
  props<{ payload: UserInterface }>()
);

export const UpdateUserSuccess = createAction(
  usersTypeActions.UPDATE_USER_SUCCESS,
  props<{ payload: UserInterface }>()
);

export const UpdateUserFail = createAction(
  usersTypeActions.UPDATE_USER_FAIL,
  props<{ error: string }>()
);

//DELETE USER ///////////////////////////////////
export const DeleteteUser = createAction(
  usersTypeActions.DELETE_USER,
  props<{ payload: number }>()
);

export const DeleteUserSuccess = createAction(
  usersTypeActions.DELETE_USER_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUserFail = createAction(
  usersTypeActions.DELETE_USER_FAIL,
  props<{ error: string }>()
);
