import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user='';
  pass='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    // this.auth.Authenticate(this.user,this.pass);
    console.log("this.user:"+this.user+"\nthis.pass:"+this.pass);
    if(this.user=="04233"&&this.pass=="admin"){
      localStorage.setItem('accessToken','Pass');
      this.router.navigate(['Slotmatcine']);
    }
    else{
      window.alert("ID or Passwrod Wrong!");
      console.log("Pass wrong");
      this.router.navigate(['']);
    }
  }

}
