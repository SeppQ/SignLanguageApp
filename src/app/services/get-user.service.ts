import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../DTO/User';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  urlforAllUsers=' https://5m4cw2lpld.execute-api.eu-west-1.amazonaws.com/default/RDSGetUsers';
  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };


  getUsers( ): Observable<User> {
    return this.http.get<User>(this.urlforAllUsers,this.httpOptions);
  }

  getUserByEmail( email : string) : Observable<User>{
    let url = 'https://792lvnlcwb.execute-api.eu-west-1.amazonaws.com/default/getUserByEmail?email=' + email;
    return this.http.get<User>(url , this.httpOptions);
  }
  insertUser(user : User){

    let url = "https://8yx0uurnz9.execute-api.eu-west-1.amazonaws.com/default/RDSPostUSer?email=" + user.email +"&level="+ user.level +"&exp="+ user.exp;
    return this.http.post(url,user,this.httpOptions)
  }
}
