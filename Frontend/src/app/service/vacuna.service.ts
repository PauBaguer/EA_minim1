import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { User } from '../models/user';
import { Vacuna } from '../models/vacuna';

@Injectable({
  providedIn: 'root',
})
export class VacunaService {
  url = 'http://localhost:3000/vacuna';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + '/');
  }

  addVacuna(personaName: String, vacuna: Vacuna): Observable<Object> {
    return this.http.post(this.url + '/' + personaName, vacuna);
  }
}
