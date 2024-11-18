import { Route } from "@angular/router";
import { FlujoComponent } from "./flujo/flujo.component";
import { EspacioReservadoComponent } from "./espacio-reservado/espacio-reservado.component";
import { OffsetComponent } from "./offset/offset.component";
import { RelativeComponent } from "./relative/relative.component";
import { AbsoluteComponent } from "./absolute/absolute.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

export default [
  { path: 'flujo', component: FlujoComponent },
  { path: 'espacio-reservado', component: EspacioReservadoComponent },
  { path: 'offset', component: OffsetComponent },
  { path: 'relative', component: RelativeComponent },
  { path: 'absolute', component: AbsoluteComponent },
  { path: 'tooltip', component: TooltipComponent },
] as Route[];
