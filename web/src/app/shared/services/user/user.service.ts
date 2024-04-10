import { Injectable } from '@angular/core';
import { BaseService } from '../helpers/base.service';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storageService';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model';

@Injectable({ providedIn: 'root' })

export class UserService extends BaseService {
  private loggedIn = new BehaviorSubject(false);
  _loggedIn = this.loggedIn.asObservable();
  private profileChanged = new BehaviorSubject<UserModel | null>(null);
  _profileChanged = this.profileChanged.asObservable();
  
  // tslint:disable-next-line: deprecation
  constructor(public httpClient: HttpClient,
    public storage: StorageService
  ) {
    super(httpClient);
    this.loggedIn.next(!!this.storage.getToken());
  }
  // USER
  checkLoggedOnBrowser() {
    if (this.storage.getToken()) {
      this.loggedIn.next(!!this.storage.getToken());
      return true;
    }
    return false;
  }

  getIsLoggedIn() {
    return this.loggedIn.getValue();
  }

  setToken(value : string) {
    return this.storage.setToken(value);
  }

  getProfileChanged() {
    return this.profileChanged.getValue();
  }

  setProfileChanged(value: UserModel) {
    this.profileChanged.next(value);
  }

  login(value : boolean) {
    this.loggedIn.next(value);
  }

  logout() {
    return this.postData('logout');
  }

  clearStorage() {
    this.loggedIn.next(false);
    this.profileChanged.next(null);
    this.storage.removeToken();
  }

  getProfile() {
    return this.getData('user/profile');
  }

  updateProfile(body: Partial<UserModel>) {
    return this.putData(`user/profile`, body);
  }

}
