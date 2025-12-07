import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
  }
)
export class ThemeService {

  constructor() {
  }

  currentTheme: string = 'light';

  getTheme(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    return this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = (this.currentTheme === 'light') ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    return this.currentTheme;
  }

}
