import { Component, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Tab2Page} from '../tab2/tab2.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl: NavController) {
  }


   usuario="asened";
   pass="asened";
   Fusuario="";
   Fpass="";
   messages="Bienvenido";
    todo = {}
    logForm() {
     if(this.Fusuario===this.usuario && this.Fpass === this.pass){
      this.messages="Entraste";
      console.log("Log in ok send to another tab");
      this.navCtrl.navigateForward("../tab2/tab2");  
      }else{
       this.messages="Usuario o contraseña incorrectos";
        console.log("Usuario o contraseña incorrectos");
      }  
    
    }
   

    

}
