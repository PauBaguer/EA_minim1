import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FAQ } from '../models/faq';
import { Persona } from '../models/persona';
import { User } from '../models/user';
import { Vacuna } from '../models/vacuna';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  url = 'http://localhost:3000/faq';

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.url + '/');
  }

  addFAQ(faq: FAQ): Observable<Object> {
    return this.http.post(this.url + '/', faq);
  }

  deleteFAQ(id: String) {
    return this.http.delete(this.url + '/' + id);
  }
}
