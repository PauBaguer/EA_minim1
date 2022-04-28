import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaEditComponent } from './components/persona-edit/persona-edit.component';
import { VacunaCreateComponent } from './components/vacuna-create/vacuna-create.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqCreateComponent } from './components/faq-create/faq-create.component';

@NgModule({
  declarations: [AppComponent, CrearUserComponent, ListarUsersComponent, PersonaListComponent, PersonaEditComponent, VacunaCreateComponent, FaqListComponent, FaqCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
