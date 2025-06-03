import { Component } from '@angular/core';
import { authData } from '../models/interfaces/classes/auth.class';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { BlobOptions } from 'buffer';

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
  isLoading: Boolean = false;
  constructor(private fb: FormBuilder,
    private authService : AuthService
  ){
    this.authFrom = this.fb.group({
      name:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){ 
    console.log("surov componentdan ketdi");
    
    if(this.authFrom.invalid){
      console.log("Forma notug'ri tuldirilgan");
      return
      
    }
    this.isLoading  = true;
    if(this.authFrom.valid){
      this.authService.sendData(this.authFrom.value).subscribe({
        next : (res) =>{
          alert(`${res.name}, malumot`);
          this.isLoading = false
        },
        error: (err) =>{
          console.log("xatolik", err);
          this.isLoading = true
          
        }
      })
      
    }
  }

}
