import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent {

  forgotPasswordForm = this.fb.group({
    email:['']
  })

  backToLogin(){
    this.router.navigate(['/']);

  }
  emailSent = false;

  sendEmail() {
    this.emailSent = true;
  }
  

  constructor(private router: Router, private fb: FormBuilder){}

}
