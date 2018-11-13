import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  @ViewChild("title")  title;
  @ViewChild("url")  url;
  @ViewChild("desc") desc;
  
  constructor(private service:AppService) { }

  ngOnInit() {
  }

  
  add(){
    if(this.title.nativeElement.value != "" && this.url.nativeElement.value != "" && this.desc.nativeElement.value != ""){
      this.service.postUser(this.title.nativeElement.value,this.url.nativeElement.value,this.desc.nativeElement.value)
      .subscribe(user => {
        console.log("last user: ", user);
      })
    } else{
      alert("please fill in the fields")
    }
    this.title.nativeElement.value = "";
    this.url.nativeElement.value = "";
    this.desc.nativeElement.value = "";
    window.location.reload();
  }
}
