import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modelos } from 'src/common/imodelos';
import { ModelosServiceService } from 'src/services/modelos-service.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent {


modelos!: Modelos[];

ngOnInit(){
  this.service.getModelos().subscribe((data:Modelos[]) => {
    this.modelos = data
  })
}

  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

  goToColecoes(){
    this.route.navigate(['/colecoes'])
  }

  goToModelos(){
    this.route.navigate(['/modelos'])
  }

  goToCriarModelos(){
    this.route.navigate(['/criarModelos'])
  }

  editModelo(id: number){
    this.route.navigate([''])
  }
constructor(private service: ModelosServiceService, private route: Router){}
}
