import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoatComponent } from './components/chat-boat/chat-boat.component';


const routes: Routes = [
  { path: '', component: ChatBoatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
