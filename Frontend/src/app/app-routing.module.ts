import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { PersonaEditComponent } from './components/persona-edit/persona-edit.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { VacunaCreateComponent } from './components/vacuna-create/vacuna-create.component';

// Routes
const routes: Routes = [
  { path: '', component: PersonaListComponent },

  { path: 'editar-persona/:name', component: PersonaEditComponent },
  { path: 'crear-vacuna', component: VacunaCreateComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }, // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
