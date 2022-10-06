import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinkingComponent } from './components/thinkings/create-thinking/create-thinking.component';
import { GetThinkingsComponent } from './components/thinkings/get-thinkings/get-thinkings.component';

const routes: Routes = [
  {path: "",
  redirectTo: "get-thinkings",
  pathMatch: "full"
  },
  {path: "create-thinkings",
  component: CreateThinkingComponent,
  },
  {path: "get-thinkings",
  component: GetThinkingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
