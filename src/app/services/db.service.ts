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
      id: "Prod0",
      name: "apple",
      noOfProduct: 2000,
      amount: 10,
      weight: "1kg",
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod1",
      name: "bannana",
      noOfProduct: 1000,
      amount: 10,
      weight: "2kg",
      stocksAvail: 1000,
      stocksSold: 0,
    },
    {
      id: "Prod2",
      name: "orange",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }
    , {
      id: "Prod3",
      name: "Carrot",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod4",
      name: "Beetroot",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod5",
      name: "Cake",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      id: "Prod6",
      name: "Bread",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod7",
      name: "Beaf",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod8",
      name: "Chicken",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      id: "Prod9",
      name: "Rice (Brown)",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      id: "Prod10",
      name: "Rice (White)",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      id: "Prod11",
      name: "Palm Oil",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }, {
      id: "Prod12",
      name: "Sunflower Oil",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },

    {
      id: "Prod13",
      name: "Grain",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    },
    {
      id: "Prod14",
      name: "Black Pepper",
      noOfProduct: 2000,
      amount: 10,
      weight: 0,
      stocksAvail: 2000,
      stocksSold: 0,
    }
  ]

  selectedProducts: any[] = [];

}
