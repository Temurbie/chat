import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authData } from '../models/interfaces/classes/auth.class';
import { AuthResponse } from '../models/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  private apiUrl:string = 'http://localhost:3000/auth/register' 

  sendData(data:authData):Observable<AuthResponse>{
    console.log("surov servicedan" , this.apiUrl, 'ga ketdi');
    
    return this.http.post<AuthResponse>(this.apiUrl, data)
  }

  
}
