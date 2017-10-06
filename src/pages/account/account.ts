import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'account-home',
    templateUrl: 'account.html'
  })

  export class Account{
    constructor(public navCtrl:NavController, public params:NavParams){
        console.log(params.data);        
     }
  }