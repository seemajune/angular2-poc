import { Component } from '@angular/core';

export class Assignment {
	id: number;
	title: string;
	subtitle: string;
}

@Component({
  selector: 'my-app',
  template:`
	<h1>Assignments</h1>
	<div *ngFor="let assignment of assignments">
	<div class="card card__details">
	<h2>{{assignment.title}}</h2>
	<div class="card__summary">
	<p>{{assignment.subtitle}}</p>
	</div>
	<button class="btn btn__watch">watch</button>
	</div>
	</div>
  `
})

export class AppComponent {
	public assignments = ASSIGNMENTS;
}

const ASSIGNMENTS: Assignment[] = [
  { id: 11, title: 'MCAT Assignment 11', subtitle: 'MCAT Diagnostic Exam' },
  { id: 12, title: 'MCAT Assignment 12', subtitle: 'Science Assessments' },
  { id: 13, title: 'MCAT Assignment 13', subtitle: 'Important Welcome Message' },
  { id: 14, title: 'MCAT Assignment 14', subtitle: 'How to Access your  MCAT Flashcard App' },
  { id: 15, title: 'MCAT Assignment 15', subtitle: 'How to Access a Digital Version of your MCAT Review Books' },
  { id: 16, title: 'MCAT Assignment 16', subtitle: 'Information About your Higher Score Guarantee' }
];