import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { VacunaService } from 'src/app/service/vacuna.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css'],
})
export class PersonaEditComponent implements OnInit {
  listPersonas: Persona[] = [];
  name: String | null;
  persona: Persona | undefined;

  constructor(
    private vacunaService: VacunaService,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.name = this.aRouter.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.vacunaService.getPersonas().subscribe(
      (data) => {
        this.listPersonas = data;
        this.persona = this.listPersonas.find((v) => v.name === this.name);
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }
}
