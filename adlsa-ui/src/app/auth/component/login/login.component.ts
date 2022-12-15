import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/core/services/config/settings.service';
import { ValidationMessagesService } from 'src/app/core/services/config/validation-messages.service';
import { AuthRepository } from '../../services/auth.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  username!: FormControl;
  password!: FormControl;
  submitted: boolean = false;

  constructor(private authRepository: AuthRepository, private formBuilder: FormBuilder,
              private validationMessagesService: ValidationMessagesService,
              private router: Router,
              private settingsService: SettingsService
              ){}

 
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username = this.form.controls['username'] as FormControl;
    this.password = this.form.controls['password'] as FormControl;
  }

  submit(): void {
    if (this.form.valid) {
      this.submitted = true;
      this.authRepository.login(this.form.value).subscribe(
        res => {
          this.settingsService.setToken(res.accessToken);
          this.submitted = false;
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.submitted = false;
          this.password.reset();
        }
      );
    }
    else {
      this.validationMessagesService.validateAllFormFields(this.form);
    }
  }

}
