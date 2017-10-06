import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from "../account/account"; //import for call this view

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public user:any = {
    email:"",
    pass:""
  };
  public errMessage:string = "";
  public account:any = Account; //for call this view

  constructor(public navCtrl: NavController) {

  }

  /*
    validate:
    1. empty fields
    2. validate email structure
    3. password must be 'admin'
  */
  public getAccess(){
    //console.log(this.user);
    if(this.emptyFields(this.user.email,this.user.pass)){
      if(this.validateEmail(this.user.email)){
        if(this.user.pass == "admin"){
          this.errMessage = ""  //call view
          this.navCtrl.push(Account,this.user.email);
        }else{
          this.errMessage = "Password incorrect";
        }
      }else{
        this.errMessage = "The email looks pretty bad.";
      }
    }
  
  }
  public getAccessKey(event:any){
    if(event.keyCode == 13){
      this.getAccess();
    }
  }

  //this method is for validate empty fields such email and password
  private emptyFields(email:string, pass:string){
    if(email == "" && pass == ""){
      this.errMessage = "Email or passoword incorrect.";      
      return false;
    }

    if(email == ""){
      this.errMessage = "Email cannot be empty.";
      return false;
      
    }

    if(pass == ""){
      this.errMessage = "Passoword cannot be empty.";
      return false;      
    }
    return true;  // 200
  }//emptyFields()

  //this method is for validate email structure using regex
  private validateEmail(email:string) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  
}
