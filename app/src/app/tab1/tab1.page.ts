import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

	private can_message:boolean;
	public message:string;
	public show_message:string = 'clicked the button!';
	private click_count:number = 0;
	private daily_limit:number = 2;
	private current_opinion:boolean;
	private has_opinionated:boolean = true;


	constructor() {

		if (1 == 1) {
			this.can_message = true;
		} else {
			this.can_message = false;
		}

		if (this.can_message) {
			this.message = 'Hello world';
		} else {
			this.message = 'no go away';
		}

		this.daily_limit = 4;

		// check if opinionated
		// send a request to the php server
		// check thhe php database for the opinion
		// validate it
		// send it back
		
		if (this.has_opinionated) {
			this.nextItem();
			// HHI CHUCKIE YOU SLAG
		}
	}

	testingClick() {
		this.click_count++;

		if (this.click_count < this.daily_limit) {
			this.message = 'clicked the button!';
		} else {
			this.message = 'You\'ve had your fun today';
		}

		if (this.click_count == this.daily_limit) {
			this.click_count = 0;
		}
	}

	checkPreviousOpinion() {
		// Check the user hasn't opinionated on this item before.
		this.has_opinionated = false;
		if (!this.has_opinionated) {
			this.openOpinionDialogue();
		} else {
			// Show message to user
			this.nextItem();
		}	
	}

	openOpinionDialogue() {
		// open text dialogue to enter brief reason
	}

	opinion(opinion:boolean) {
		this.current_opinion = opinion;
		if (opinion) {
			alert('likey');
		} else {
			alert('no likey');
		}
		
		this.checkPreviousOpinion();
	}

	opinionSubmitted() {
		// we use this.current_opinion
		// Send response to server.
		// Do whatever with the response.
		this.nextItem()
	}

	nextItem() {
		// go to the next slide
		// Getting it from the server
		// Replacing the shit
	}

}
