import { Injectable } from '@angular/core';
import { environment } from '@frontend/utility/environments';
import { ISession } from '@shared/interfaces';

const localAccessToken = 'access-token';
const localSession = 'session';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get currentUserSession(): ISession | null {
    const sessionKey = localStorage.getItem(localSession);
    if (!sessionKey) {
      return null;
    }

    const currentDecodedSession = atob(sessionKey);

    if (!currentDecodedSession) {
      return null;
    }

    const data = JSON.parse(currentDecodedSession) as ISession;

    if (!data) {
      return null;
    }

    return data;
  }

  get isLoggedIn(): boolean {
    if (
      Boolean(localStorage.getItem(localAccessToken)) &&
      this.currentUserSession
    ) {
      const currentDate = new Date();

      if (
        this.currentUserSession.expireTime &&
        new Date(this.currentUserSession.expireTime) > currentDate
      ) {
        const sessionTimeSeconds = Number.parseInt(
          environment.tokenExpiresIn.replace('m', '').replace('s', ''),
          10
        );

        const newSession: ISession = this.currentUserSession;
        const newExpiryDate = new Date();
        newExpiryDate.setSeconds(
          newExpiryDate.getSeconds() + sessionTimeSeconds
        );
        const expDate = new Date().setMilliseconds(
          currentDate.getMilliseconds() +
            Number.parseInt(
              environment.tokenExpiresIn.replace('m', '').replace('s', ''),
              10
            )
        );

        newSession.expireTime = new Date(expDate);
        this.setAuthSession(newSession);

        return true;
      }

      // this.toast.showError('Please login again', 'Session Timeout');
      this.logout();
    }

    return false;
  }

  get permisssions() {
    return this.currentUserSession && this.currentUserSession.permissions
      ? this.currentUserSession.permissions
      : [];
  }

  get rolePermisssion() {
    return this.currentUserSession && this.currentUserSession.rolePermission
      ? this.currentUserSession.rolePermission
      : [];
  }

  get userName() {
    return this.currentUserSession && this.currentUserSession.userName
      ? this.currentUserSession.userName
      : [];
  }

  get firstName() {
    return this.currentUserSession && this.currentUserSession.firstName
      ? this.currentUserSession.firstName
      : [];
  }

  get userType() {
    return this.currentUserSession && this.currentUserSession.userType
      ? this.currentUserSession.userType
      : [];
  }

  get userTypeId() {
    return this.currentUserSession && this.currentUserSession.userTypeId
      ? this.currentUserSession.userTypeId
      : [];
  }

  get userId() {
    return this.currentUserSession && this.currentUserSession.userId
      ? this.currentUserSession.userId
      : [];
  }

  /**
   * @description Setting User Session After Login.
   * @param user
   */
  setAuthSession(user: ISession) {
    const sessionString = btoa(JSON.stringify(user));
    localStorage.setItem(localSession, sessionString);
    localStorage.setItem(localAccessToken, user.accessToken);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(localSession);
    localStorage.removeItem(localAccessToken);
  }
}
