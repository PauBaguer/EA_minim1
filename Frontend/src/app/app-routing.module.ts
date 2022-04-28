import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqCreateComponent } from './components/faq-create/faq-create.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';

// Components

import { PersonaEditComponent } from './components/persona-edit/persona-edit.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { VacunaCreateComponent } from './components/vacuna-create/vacuna-create.component';

// Routes
const routes: Routes = [
  { path: '', component: FaqListComponent },
  { path: 'faq-create', component: FaqCreateComponent },

  { path: 'editar-persona/:name', component: PersonaEditComponent },
  { path: 'crear-vacuna', component: VacunaCreateComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }, // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
