import { UserService } from './../../repository/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromUsersActions from './users.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.usersTypeActions.LOAD_USERS),
      exhaustMap(() =>
        this.userService.getUsers().pipe(
          map(
            (payload) => fromUsersActions.LoadUsersSuccess({ payload }),
            catchError((error) => of(fromUsersActions.LoadUsersFail({ error })))
          )
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.usersTypeActions.LOAD_USER),
      exhaustMap((record: any) =>
        this.userService.getUserById(record?.payload).pipe(
          map(
            (payload) => fromUsersActions.LoadUserSuccess({ payload }),
            catchError((error) => of(fromUsersActions.LoadUserFail({ error })))
          )
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.usersTypeActions.CREATE_USER),
      exhaustMap((record: any) =>
        this.userService.addUser(record?.payload).pipe(
          map(
            (payload: any) => fromUsersActions.CreateUserSuccess({ payload }),
            catchError((error) =>
              of(fromUsersActions.CreateUserFail({ error }))
            )
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.usersTypeActions.UPDATE_USER),
      exhaustMap((record: any) =>
        this.userService
          .updateUserById(record?.payload?.id, record?.payload)
          .pipe(
            map(
              (payload: any) => fromUsersActions.UpdateUserSuccess({ payload }),
              catchError((error) =>
                of(fromUsersActions.UpdateUserFail({ error }))
              )
            )
          )
      )
    )
  );

  deleteteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.usersTypeActions.DELETE_USER),
      exhaustMap((record: any) =>
        this.userService.deleteUserById(record?.payload).pipe(
          map(
            () =>
              fromUsersActions.DeleteUserSuccess({ payload: record.payload }),
            catchError((error) =>
              of(fromUsersActions.DeleteUserFail({ error }))
            )
          )
        )
      )
    )
  );
}
