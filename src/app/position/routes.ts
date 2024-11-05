import { Route } from "@angular/router";
import { FlujoComponent } from "./flujo/flujo.component";
import { EspacioReservadoComponent } from "./espacio-reservado/espacio-reservado.component";
import { OffsetComponent } from "./offset/offset.component";

export default[
    {path:'flujo', component: FlujoComponent},
    {path:'espacio-reservado',component:EspacioReservadoComponent},
    {path:'offset',component:OffsetComponent},
] as Route[];