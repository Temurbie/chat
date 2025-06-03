import { Component } from '@angular/core';
import { authData } from '../models/interfaces/classes/auth.class';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,

  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  //variables
  authFrom: FormGroup;
  constructor(private fb: FormBuilder){
    this.authFrom = this.fb.group({
      name:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){ 
    console.log(this.authFrom.valid,
      this.authFrom.value
    );
    if(this.authFrom.valid){
      
      console.log("zur", this.authFrom.value);
      
    }else{
      console.log("nooo");
      
    }
  }

}
