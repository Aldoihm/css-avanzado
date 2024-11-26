import { Route } from "@angular/router";
import { FixedComponent } from "./fixed/fixed.component";
import { StackingComponent } from "./stacking/stacking.component";
import { ZIndexComponent } from "./z-index/z-index.component";
import { PointerEventsComponent } from "./pointer-events/pointer-events.component";

export default [
    { path: 'fixed', component: FixedComponent },
    { path: 'stacking', component: StackingComponent },
    { path: 'z-index', component: ZIndexComponent },
    { path: 'pointer-events', component: PointerEventsComponent },
] as Route[];