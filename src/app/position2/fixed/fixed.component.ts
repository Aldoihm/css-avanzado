import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed',
  standalone: true,
  imports: [],
  templateUrl: './fixed.component.html',
  styleUrl: './fixed.component.css'
})
export class FixedComponent {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    this.router.navigate([],{ fragment: sectionId}).then(() => {
      const element = document.getElementById(sectionId);
      if(element){
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
      }
    });
  }
}
