import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  	constructor() { }
  	private password: string = "cf5923c71dd19344c8d02ab71b3a2024";
  	private ttl: number = 43200000;
  	authenticate(uname: string, password: string): boolean{
  		let now = new Date();
  		if(uname == "adminZq9I2" && password == this.password){
  			const user_token = {
  				'username': "adminZq9I2",
  				'expiry': now.getTime() + this.ttl
  			}
  			localStorage.setItem("user_token",JSON.stringify(user_token));
  			return true;
  		}
  		return false;
 	}
}