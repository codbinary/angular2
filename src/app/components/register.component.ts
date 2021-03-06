import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

//Importamos los services
import { LoginService } from '../services/login.service';
//importamos el modelo
import { User } from '../model/user';


@Component({
  selector: 'register',
  templateUrl: 'app/view/register.html',
  providers: [LoginService]
})
export class RegisterComponent  {

	public titulo:string = "Registro";
	public user: User;
	public errorMessage;
	public status;

	constructor(
		private loginService: LoginService,
		private route: ActivatedRoute,
		private router: Router
	){}

	ngOnInit(): void{
		this.user = new User(1, "user", "", "", "", "", "null");
	}

	onSubmit(){
		console.log(this.user);
		this.loginService.register(this.user).subscribe(
			response => {
				this.status = response.status;
				if(this.status != "success"){
					this.status = "error";
				}
			},
			error => {
				this.errorMessage = <any>error;
				if(this.errorMessage != null) {
					console.log(this.errorMessage);
					alert("Error en la peticion");
				}
			}
		);
	}

}