import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/common/iuser';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  user: User = new User();
  listOfUsers: User[] = [];
  loginUser!: FormGroup;

  //Formulário para login
  createForm(user: User) {
    this.loginUser = new FormGroup({
      email: new FormControl(user.email, [Validators.required]),
      senha: new FormControl(user.senha, [Validators.required]),
    });
  }

  //implementação do service para obter lista de todos os usuários cadastrados no db.json
  getUsersList() {
    this.service.getUsers().subscribe((users) => {
      this.listOfUsers = users;
      console.log(users)
    });
  }

  get email() {
    return this.loginUser.get('email');
  }
  get senha() {
    return this.loginUser.get('senha');
  }

  findUser() {
    this.listOfUsers.find((user) => {
      if (user.email === this.email!.value) {
        this.user = user;
      }
    });
    if (this.user.email === undefined && this.email!.value === null) {
      this.email!.setErrors({ required: true });
      this.email!.markAsTouched();
      return false;
    } else if (this.user.email === undefined && this.email!.value != null) {
      this.email!.setErrors({ invalid: true });
      this.email!.markAsTouched();
      return false;
    } else {
      return true;
    }
  }

  correctPassword() {
    if (this.senha!.value === null) {
      this.senha!.setErrors({ required: true });
      this.senha!.markAsTouched();
    } else {
      if (this.user.senha === this.senha!.value) {
        return true;
      } else {
        this.senha!.setErrors({ invalid: true });
        this.senha!.markAsTouched();
        return false;
      }
    }
    return false;
  }
  
  createLocalStorage(booleanValue: boolean){
    localStorage.setItem('logged', `${booleanValue}`)
  }

  //to-do: implementar mensagens de erro
  login() {
    if (this.findUser() ) {
      if (this.correctPassword()) {
        this.createLocalStorage(true);
        this.router.navigate(['dashboard']);
      } else {
        this.createLocalStorage(false);
        window.alert("erro")
      }
    } else {
      this.createLocalStorage(false);
      window.alert("erro")
    }
  }

  goToCadastro(){
    this.router.navigate(['cadastro'])
  }

  goToForgotPassword(){
    this.router.navigate(['forgotPassword'])
  }

  constructor(
    private router: Router,
    private service: UserServiceService
  ) {}

  ngOnInit(): void {
    this.getUsersList();
    this.createForm(new User());
    // this.createLocalStorage(false)
  }
}
