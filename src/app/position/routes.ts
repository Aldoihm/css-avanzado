import { Route } from "@angular/router";
import { FlujoComponent } from "./flujo/flujo.component";
import { EspacioReservadoComponent } from "./espacio-reservado/espacio-reservado.component";

export default[
    {path:'flujo', component: FlujoComponent},
    {path:'espacio-reservado',component:EspacioReservadoComponent}
] as Route[];