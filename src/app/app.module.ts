import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { PostComponent } from './components/post/post.component';
import { HeaderpostComponent } from './components/headerpost/headerpost.component';
import { CommentoComponent } from './components/commento/commento.component';
import { CorpopostComponent } from './components/corpopost/corpopost.component';
import { FotoprofiloComponent } from './components/fotoprofilo/fotoprofilo.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { IntestazioneComponent } from './components/intestazione/intestazione.component';
import { PosttagComponent } from './components/posttag/posttag.component';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { BottonecommentiComponent } from './components/bottonecommenti/bottonecommenti.component';
import { PopupcommentiComponent } from './components/popupcommenti/popupcommenti.component'

import { MatDialogModule } from '@angular/material/dialog';
import { IntestazioneprofiloComponent } from './components/intestazioneprofilo/intestazioneprofilo.component';
import { PopupNuovoPostComponent } from './components/popup-nuovo-post/popup-nuovo-post.component';
import { PaginaPostComponent } from './pages/pagina-post/pagina-post.component';
import { BarraricercaComponent } from './components/barraricerca/barraricerca.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EvidenziaricercaDirective } from './directives/evidenziaricerca.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfiloComponent,
    LoginComponent,
    RegistrazioneComponent,
    PostComponent,
    HeaderpostComponent,
    CommentoComponent,
    CorpopostComponent,
    FotoprofiloComponent,
    IntestazioneComponent,
    PosttagComponent,
    ReactionsComponent,
    BottonecommentiComponent,
    PopupcommentiComponent,
    IntestazioneprofiloComponent,
    PopupNuovoPostComponent,
    PaginaPostComponent,
    BarraricercaComponent,
    EvidenziaricercaDirective
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
