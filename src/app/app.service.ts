import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{

  constructor(private http: HttpClient ) { }
  
  configUrl = 'http://localhost:3000/pictures';

  ngOnInit(){
  }

  getUser():Observable<any> {
    return this.http.get(this.configUrl)
  }

  postUser(title, imgUrl, desc):Observable<any> {
    let dataUser = {
      title: title,
      src: imgUrl,
      descriptions: desc
    };
    return this.http.post(this.configUrl, dataUser)
  }
}
