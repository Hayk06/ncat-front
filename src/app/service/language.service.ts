import {inject, Injectable} from "@angular/core";
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn:'root'
  }
)
export class LanguageService {

  translate = inject(TranslateService);
  constructor() {
  }

  currentLang: string = 'en';

  getLanguage(): string {
    const savedTheme = localStorage.getItem('language');
    if (savedTheme) {
      this.currentLang = savedTheme;
    }
    return this.currentLang;
  }

  toggleLange() {
    this.currentLang = (this.currentLang === 'en') ? 'hy' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('language', this.currentLang);
    return this.currentLang;
  }

}
