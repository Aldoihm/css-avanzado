import { Route } from "@angular/router";
import { FixedComponent } from "./fixed/fixed.component";
import { StackingComponent } from "./stacking/stacking.component";

export default [
    { path: 'fixed', component: FixedComponent },
    { path: 'stacking', component: StackingComponent },
] as Route[];