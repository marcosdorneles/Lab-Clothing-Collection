import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {


  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

  goToColecoes(){
    this.route.navigate(['/colecoes'])
  }

  goToModelos(){
    this.route.navigate(['/modelos'])
  }
  constructor(private route: Router){}
}
