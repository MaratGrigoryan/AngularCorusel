import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild("title")  title;
  @ViewChild("url")  url;
  @ViewChild("desc") desc;

  imgData:any;

  constructor(private service:AppService){}

  ngOnInit(){
    this.service.getUser()
    .subscribe(user => {
      this.imgData = user;
    });
  }

  
  add(){
    this.service.postUser(this.title.nativeElement.value,this.url.nativeElement.value,this.desc.nativeElement.value)
    .subscribe(user => {
      console.log("last user: ", user);
    })
    this.title.nativeElement.value = "";
    this.url.nativeElement.value = "";
    this.desc.nativeElement.value = ""
    window.location.reload();
  }

}
