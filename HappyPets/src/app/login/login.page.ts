import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { Usuario } from '../providers/servidor.service';
//import { Usuario } from '../folder/providers/servidor/servidor';
import { ServidorService} from '../providers/servidor.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 export class LoginPage  {
  [x: string]: any;

 email: string;
 senha: string;
  alertCrtl: any;
  // private alertCtrl: AlertController
//    constructor(private alertCtrl: AlertController) { }
//    ionViewDidLoad(){
//     console.log('ionViewDidLoad LoginPage');
//  }
 
 usuario: Usuario[];
  NavController: any;
  http: any;

constructor( public navCtrl: NavController, private alertCtrl: AlertController) { }
ionViewDidLoad(){
console.log('ionViewDidLoad LoginPage');
}



  logar(){
    
    
      console.log("vai logar");
      
      
            dados =>{
              {
    if(dados.dados.estado == "Ativo"){
      this.NavController.setRoot(HomePage);
    }
  }
}
       
  }
         
  // if (this.email == undefined || this.senha == undefined){
  //   let alert = this.alertCrtl.create({
  //     title: 'Atenção',
  //     subTitle:'preencha todos os campos',
  //     buttons:['ok']
  //     })
  //     alert.present();
  //     }else{
  //       console.log("Vai logar");
  //     }
  
  //     }
    
  

  }
 