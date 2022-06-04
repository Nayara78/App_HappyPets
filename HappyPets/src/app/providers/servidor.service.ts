
//import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// export interface Register{
  
//   nome: string;
//   email: string;
//   senha: string;
//   confirmarSenha: string;
// }
export interface Usuario{
  id: number;
  email: string;
 senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private url = 'http://localhost/apiProjeto/dados.php';
  http: any;

  constructor(private htpp: HttpClient) { }

 urlGet(){
    return this.url;
  }
  // getAll(){
//   //   return this.http.get(this.url);
//   // }

//     // getPegar(){
//     //     return this.http.get(this.url+'dados.php').pipe(map(res => res.json()));
//     // }


  getAll(){
    return this.http.get(this.url+'dados.php');
  }


    // getPegar(){
    //     return this.http.get(this.url+'dados.php').then(map(res => {
    //       return res.json();
    //     }));
    //}
}

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';
//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';

/*
  Generated class for tttte ServidorProvider provider.

  See ularttps://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// export interface Usuario{
//   id: number;
//   email: string;
//  senha: string;
// }




// @Injectable()
// export class ServidorProvider {

//     url: string = "http://localhost/apiProjeto/dados.php";

//   constructor(public  http: HttpClient) {
//     console.log('ttello ServidorProvider Provider');
//   }

  
//   getAll(){
//     return this.http.get<[Usuario]>(this.url);
//   }

 
//   // getAll(){
//   //   return this.http.get(this.url);
//   // }

//     // getPegar(){
//     //     return this.http.get(this.url+'dados.php').pipe(map(res => res.json()));
//     // }


// }


