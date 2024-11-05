import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'css-avanzado';
  positionMenu: boolean = false;

  togglePositionMenu(){
    this.positionMenu = !this.positionMenu;
  }
}
