import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  firebaseConfig = {
    apiKey: "AIzaSyBfyIeraefusdYYOCcX1zhyjvAk1wYV9zo",
    authDomain: "todoappclient.firebaseapp.com",
    projectId: "todoappclient",
    storageBucket: "todoappclient.firebasestorage.app",
    messagingSenderId: "78828518421",
    appId: "1:78828518421:web:cb4b97fe0ea89e7c1de21c"
  };

  app = initializeApp(this.firebaseConfig);
}
