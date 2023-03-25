import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private userService: UserServiceService
  ) {
    this.criaNovoUsuario();
  }

  criaNovoUsuario() {
    this.novoUsuario = this.fb.group({
      nome: ['', Validators.required],
      empresa: ['', Validators.required],
      cnpj: ['', [Validators.minLength(14), Validators.maxLength(14), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.minLength(8), Validators.required]]
    });
  }

  async cadastraUsuario() {
    const usuario: User = this.novoUsuario.value;
    await this.userService
      .postUser(usuario)
      .toPromise()
      .then(() => {
        console.log('criado');
      })
      .catch((err) => console.log(err));

    console.log(usuario);
  }
}
