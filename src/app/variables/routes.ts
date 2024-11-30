import { Route } from "@angular/router";
import { VariablesCssComponent } from "./variables-css/variables-css.component";
import { ScopeComponent } from "./scope/scope.component";

export default [
  { path: 'variables-css', component: VariablesCssComponent },
  { path: 'scope', component: ScopeComponent},
] as Route[];
