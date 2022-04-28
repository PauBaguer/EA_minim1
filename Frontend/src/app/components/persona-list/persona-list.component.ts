import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { VacunaService } from 'src/app/service/vacuna.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css'],
})
export class PersonaListComponent implements OnInit {
  listPersonas: Persona[] = [];

  constructor(
    private vacunaService: VacunaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.vacunaService.getPersonas().subscribe(
      (data) => {
        this.listPersonas = data;
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }
}
