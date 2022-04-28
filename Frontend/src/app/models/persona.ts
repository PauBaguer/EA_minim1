import { Vacuna } from './vacuna';

export interface Persona {
  _id?: String;
  name: String;
  vacunas: Vacuna[];
}
