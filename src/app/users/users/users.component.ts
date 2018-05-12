import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  user;
  id = 0;
  constructor(private httpClient: HttpClient , private route: ActivatedRoute) { 
    console.log("constructor users");
    console.log(route);// para saber que opción viene  this.router.url === '/login'
    
    this.init();   
      
  }

  init(){
    console.log("init");
    let url = 'http://jsonplaceholder.typicode.com/users';
    
    this.route.params.subscribe(params => {
      console.log(+params['id']);
      if (params['id'] !== 'undefined'){
        this.id = +params['id'];
      }
      if (this.id !== 0 && this.users !== undefined) {
        this.user = this.users.filter(x => x.id === this.id )[0];
      }
      
    });
    
    this.httpClient.get(url).subscribe(data => {
      console.log(data);
      this.users = data;
    });

    if (this.users !== undefined){
      console.log("undef");
      
    }

    if (this.id !== 0 && this.users !== undefined) {
      this.user = this.users.filter(x => x.id === this.id )[0];
      console.log("this.user.name");  
      console.log(this.user);  
    }
    
  }

  ngOnInit() {


  }

}
