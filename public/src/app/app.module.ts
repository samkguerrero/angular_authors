import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthorsComponent } from './authors/authors.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { NewauthorComponent } from './newauthor/newauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    EditauthorComponent,
    NewauthorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
