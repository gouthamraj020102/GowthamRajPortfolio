import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fullName = 'Gowtham Raju Manapuram';
  headLine = 'Software Engineer  |  Full-Stack Developer  |  Tech Explorer';
  skills = ['Coding Enthusiast', 'Continuous Learner', 'Team Collaborator', 'Developer'];
  details = [
    { title: '📍 Location', value: 'Visakhapatnam, India' },
    { title: '💼 Expertise', value: 'Java/SB, Problem Solving' },
    { title: '📧 Contact', value: 'gouthamraj020102@gmail.com' }
  ];
}
