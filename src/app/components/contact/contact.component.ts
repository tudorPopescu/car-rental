import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  phoneDash: string;
  submitValue: string;

  contactForm = this.fb.group({
    userName: [null, [Validators.required, Validators.minLength(8)]],
    email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone: [null, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9-]+$')]],
    textMessage: [null, [Validators.required, Validators.minLength(20)]]
  });

  ngOnInit(): void { }

  get name() {
    return this.contactForm.get('userName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get textMessage() {
    return this.contactForm.get('textMessage');
  }

  onAddDash(value: string): string {
    return this.phoneDash =  value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  onSubmit(): string {
    return this.submitValue = 'Your message has been sent, we will contact you shortly!';
  }
}
