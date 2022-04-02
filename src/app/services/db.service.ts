import { Injectable } from '@angular/core';

interface registeration {
  firstName: string,
  lastName: string,
  mailId: string,
  gender: string,
  address: any,
  dob: any,
  userName: string,
  password: any,
  // verifyPassword: any
}

@Injectable({
  providedIn: 'root'
})


export class DbService {

  constructor() { }

  userLogin: any[] = [
    { userName: 'ADMIN', password: '12345' },
    { userName: 'Inba', password: '0011' },
    { userName: 'Swaitha', password: '171199' },
  ]

  register: registeration[] = [
    {
      firstName: "Inba",
      lastName: "Rajasekaran",
      mailId: "dineshdini0011@gmail.com",
      gender: "M",
      address: "10, A S.S Pillai Street, Thoothukudi",
      dob: "",
      userName: "Inba",
      password: "0011",
      // verifyPassword: "0011"
    }
  ]

}
