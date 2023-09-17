import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-reques.interface';

const url = 'https://reqres.in/api/users'

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  /* constructor(private http: HttpClient){} */

  //**En lugar de en el constructor lo inyecto directamente */
  private http = inject( HttpClient )

   getUserById( id:number ) :Observable<User> {
    return this.http.get<SingleUserResponse>(`${url}/${id}`)
    .pipe(
      map( response => response.data ),
      tap( console.log )
    )
   }

}
