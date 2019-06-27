import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	public today:string;

	constructor()
	{
		console.log('in the page');
	}

	ngOnInit()
	{

	}

	register(form) 
	{
		console.log(form);
  	}

  	datetest()
  	{
  		console.log('here');
  		console.log(this.today);
  	}

}
