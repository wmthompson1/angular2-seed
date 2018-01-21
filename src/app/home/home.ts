import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith');
}
