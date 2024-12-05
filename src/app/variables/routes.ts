import { Route } from "@angular/router";
import { VariablesCssComponent } from "./variables-css/variables-css.component";
import { ScopeComponent } from "./scope/scope.component";
import { HerenciaComponent } from "./herencia/herencia.component";
import { RwdComponent } from "./rwd/rwd.component";

export default [
  { path: 'variables-css', component: VariablesCssComponent },
  { path: 'scope', component: ScopeComponent},
  { path: 'herencia', component: HerenciaComponent},
  { path: 'rwd', component: RwdComponent},
] as Route[];
