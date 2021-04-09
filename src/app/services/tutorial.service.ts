import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorials } from '../DTO/Tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };

  getTutorials(): Observable<Tutorials[]>{
    let url = "https://vwjw7py8t3.execute-api.eu-west-1.amazonaws.com/default/getTutorials";
    return this.http.get<Tutorials[]>(url,this.httpOptions);
  }
  
}
