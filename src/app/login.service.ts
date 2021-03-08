import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private routes: Router) { }
  checkusernameandpassword(uname: string, pwd : string)
  {
    if(uname == "Aanchal" && pwd =="Aanchal123"){
      localStorage.setItem('username',"Aanchal");
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
      localStorage.removeItem('username');
      this.routes.navigate(['/login'])
  }
}
