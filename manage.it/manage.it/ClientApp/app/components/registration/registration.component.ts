import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'registration',
    template: require('./registration.component.html'),
    styles: [require('./registration.component.css')]
})
export class RegistrationComponent {
    public registrationForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.registrationForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onSubmit(): void {
         if(!this.registrationForm.valid){
             return;
         }
         alert('form valid :)');
    }
}
