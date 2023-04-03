import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/common/iuser';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  novoUsuario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.criaNovoUsuario();
  }

  criaNovoUsuario() {
    this.novoUsuario = this.fb.group({
      nome: ['', Validators.required],
      empresa: ['', Validators.required],
      cnpj: ['', [Validators.minLength(14), Validators.maxLength(14), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }

  async cadastraUsuario() {
    const usuario: User = this.novoUsuario.value;
    await this.userService
      .postUser(usuario)
      .toPromise()
      .then(() => {
        window.alert(`Usuário ${usuario.nome} criado com sucesso!`)
      })
      .catch((err) => console.log(err));

    console.log(usuario);
  }

  goToLogin(){
    this.router.navigate([''])
  }
}
