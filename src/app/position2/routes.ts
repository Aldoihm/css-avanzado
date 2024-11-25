import { Route } from "@angular/router";
import { FixedComponent } from "./fixed/fixed.component";
import { StackingComponent } from "./stacking/stacking.component";
import { ZIndexComponent } from "./z-index/z-index.component";

export default [
    { path: 'fixed', component: FixedComponent },
    { path: 'stacking', component: StackingComponent },
    { path: 'z-index', component: ZIndexComponent },
] as Route[];