import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { FAQ } from 'src/app/models/faq';
import { FaqService } from 'src/app/service/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css'],
})
export class FaqListComponent implements OnInit {
  listFaqs: FAQ[] = [];

  constructor(private faqService: FaqService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs() {
    this.faqService.getFaqs().subscribe(
      (data) => {
        console.log(data);
        this.listFaqs = data;
      },
      (error) => {
        console.log(error);
        this.toastr.error(error, 'Get FAQ error');
      }
    );
  }

  deleteFAQ(id: String) {
    this.faqService.deleteFAQ(id).subscribe(
      (data) => {
        this.toastr.success('FAQ deleted with success', 'FAQ deleted');
        this.getFaqs();
      },
      (error) => {
        console.log(error);
        this.toastr.error(error, 'Delete FAQ error');
      }
    );
  }
}
