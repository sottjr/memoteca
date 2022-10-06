import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateThinkingComponent } from './components/thinkings/create-thinking/create-thinking.component';
import { GetThinkingsComponent } from './components/thinkings/get-thinkings/get-thinkings.component';
import { ThinkingComponent } from './components/thinkings/thinking/thinking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThinkingComponent,
    GetThinkingsComponent,
    ThinkingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
