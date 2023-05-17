// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class UsersService {
  constructor(private http: HttpClient) {}

  login({ user }: { user: Any; }): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
}