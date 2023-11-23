import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseServiceService } from 'src/app/modules/shared/services/base-service.service';
import { IUserCreateDTO } from '../../dto/iuser-create-dto';
import { BehaviorSubject } from 'rxjs';
import { IUserLoginDTO } from '../../dto/iuser-login-dto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends BaseServiceService {

  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSource.asObservable();
 
  override GetResource(): string {
    return 'authentication';
  }

  constructor(private $http: HttpClient) { 
    super();
  }

  registerUser(user: IUserCreateDTO): void {
    this.$http.post<any>(`${this.endpoint}/sign-up`, user)
    .subscribe((response) => {
      console.log(response);
    });
  }

  loginUser(user: IUserLoginDTO): void {
    this.$http.post<any>(`${this.endpoint}/sign-in`, user)
    .subscribe((response) => {
      // TODO: should navigate to homepage
      console.log(response);
    });
  }

}


