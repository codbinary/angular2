import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'default',
  templateUrl: 'app/view/default.html',
  providers: [LoginService]
})
export class DefaultComponent  { 

	public titulo = "Portada";
	public identity: string;
	public data: string;


	constructor(private loginService: LoginService){}

	ngOnInit(){
		this.identity = this.loginService.getIdentity();
		this.data = this.loginService.getData();
	}

}