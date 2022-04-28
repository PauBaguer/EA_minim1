import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Vacuna } from 'src/app/models/vacuna';
import { VacunaService } from 'src/app/service/vacuna.service';

@Component({
  selector: 'app-vacuna-create',
  templateUrl: './vacuna-create.component.html',
  styleUrls: ['./vacuna-create.component.css'],
})
export class VacunaCreateComponent implements OnInit {
  vacunaForm: FormGroup;
  title = 'Crear Vacuna';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private vacunaService: VacunaService,
    private aRouter: ActivatedRoute
  ) {
    this.vacunaForm = this.fb.group({
      personaName: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      technology: ['', Validators.required],
      aprovalDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addUser() {
    const personaName: String = this.vacunaForm.get('personaName')?.value;
    const vacuna: Vacuna = {
      name: this.vacunaForm.get('name')?.value,
      description: this.vacunaForm.get('description')?.value,
      tecnology: this.vacunaForm.get('technology')?.value,
      aprovalDate: this.vacunaForm.get('aprovalDate')?.value,
    };

    this.vacunaService.addVacuna(personaName, vacuna).subscribe(
      (data) => {
        this.toastr.success('Vacuna creada!', '');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error', error);
        this.vacunaForm.reset();
      }
    );
  }
}
