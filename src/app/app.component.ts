import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  users:any;


  constructor (private http:HttpClient){


  }


  ngOnInit(): void {

     let observable = this.http.get("https://fakestoreapi.com/products");

      observable.subscribe((result:any)=>{

        this.users = result;



      })

  }





  }
