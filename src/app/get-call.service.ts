import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonDTO } from './common/types/commonDTO'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetcallService {

  constructor(private http: HttpClient) { }
getCall(): Observable<CommonDTO>{
  return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}

}
