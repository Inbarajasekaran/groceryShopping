import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  userLogin: any[] = [
    {userName : 'ADMIN', password : '12345'},
    {userName : 'Inba', password : '0011'},
    {userName : 'Swaitha', password : '171199'},
  ]

}
