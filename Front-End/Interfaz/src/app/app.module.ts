import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"juegocartasmultiplayer","appId":"1:603352110781:web:e11b6446f496102f4689d4","storageBucket":"juegocartasmultiplayer.appspot.com","apiKey":"AIzaSyC3eiAXDE6RB3i6SZNmNX5fCdA21GLydDw","authDomain":"juegocartasmultiplayer.firebaseapp.com","messagingSenderId":"603352110781","measurementId":"G-D4YHXMW32J"})),
     provideAuth(() => getAuth()),
      provideAnalytics(() => getAnalytics()),
       ScreenTrackingService, 
       UserTrackingService, 
       provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()), 
        provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
