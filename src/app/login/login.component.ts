import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService} from '../auth.service';
import {Md5} from 'ts-md5/dist/md5';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  	constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { 
	  	
  	}
  	loginStatus:string;
  	loginStatusExist: boolean;

  	loginForm = new FormGroup({
	      username: new FormControl(''),
	      password: new FormControl('')
	    });

  	ngOnInit(): void {
  		this.route.queryParams.subscribe(params => {
	        this.loginStatus = "login Failed: username or password did not match!"
  			this.loginStatusExist = params['loginFailed'];
  			setTimeout(()=>{this.loginStatusExist = false}, 5000);
	    });
  	}

  	onSubmit(){
		const md5 = new Md5();
		this.loginForm.controls.password.setValue(md5.appendStr(this.loginForm.controls.password.value).end());
  		let loginData = this.loginForm.value;
  		let authentication = this.authService.authenticate(loginData.username, loginData.password);
  		if(authentication === true)
  			this.router.navigate(['/add-jFZ2pW6-blog']);
  		else{
  			this.router.navigate(['/log-kWZr1n0-in'], { queryParams: { loginFailed: true } });
  			this.loginStatusExist = true;
  			setTimeout(()=>{this.loginStatusExist = false}, 5000);
  			this.loginForm.controls.password.setValue('')
  			this.loginForm.controls.username.setValue('')
  		}
  	}
}