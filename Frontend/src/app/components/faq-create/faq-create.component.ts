import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FAQ } from 'src/app/models/faq';
import { User } from 'src/app/models/user';
import { FaqService } from 'src/app/service/faq.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.css'],
})
export class FaqCreateComponent implements OnInit {
  faqForm: FormGroup;
  title = 'Crear User';
  listUsers: User[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private faqService: FaqService,
    private userService: UserService,
    private aRouter: ActivatedRoute
  ) {
    this.faqForm = this.fb.group({
      userQ: ['', Validators.required],
      question: ['', Validators.required],
      userA: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.listUsers = data;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error, 'User get error');
      }
    );
  }

  addFAQ() {
    const faq: FAQ = {
      userQ: this.faqForm.get('userQ')?.value,
      question: this.faqForm.get('question')?.value,
      userA: this.faqForm.get('userA')?.value,
      answer: this.faqForm.get('answer')?.value,
      postingDate: Date.now(),
    };

    console.log(faq);

    // Add user
    this.faqService.addFAQ(faq).subscribe(
      (data) => {
        this.toastr.success('FAQ created successfully!', 'FAQ Created');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.faqForm.reset();
        this.toastr.error(error, 'FAQ create error');
      }
    );
  }
}
