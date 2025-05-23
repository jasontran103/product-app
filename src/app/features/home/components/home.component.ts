import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Component to display the home page with a hero section and features section.
 * Uses RouterModule for navigation and imports the HomeComponent template.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {} 