import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface login {
  userName: any,
  password: any
}

interface registeration {
  firstName: string,
  lastName: string,
  mailId: string,
  gender: string,
  address: any,
  dob: any,
  userName: any,
  password: any,
  // verifyPassword: any
}


@Injectable({
  providedIn: 'root'
})


export class DbService {

  constructor() { }

  /* Login and Registeration */

  userLogin: login[] = [
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

  /* product list */

  products: any[] = [
    {
      name: "apple",
      noOfProduct: 2000,
      amount: 10,
      weight: "1kg",
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "bannana",
      noOfProduct: 2000,
      amount: 10,
      weight: "2kg",
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "orange",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }
    , {
      name: "Carrot",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "Beetroot",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "Cake",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      name: "Bread",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "Beaf",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "Chicken",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      name: "Rice (Brown)",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      name: "Rice (White)",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      name: "Palm Oil",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      name: "SUnflower Oil",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },

    {
      name: "Grain",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      name: "Black Pepper",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }
  ]

}
