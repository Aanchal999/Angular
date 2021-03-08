import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes : Router){}

              canActivate(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
                  if(localStorage.getItem('username')!= null){
                    return true;
                      }
                      else
                      {
                        this.routes.navigate(['/contact']);
                        return false;
                      }
              }
}
