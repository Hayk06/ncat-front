import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LanguageService} from './service/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , TranslateModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'university';

  constructor(private router: Router , private translate: TranslateService , private language: LanguageService) {
    this.translate.addLangs(['hy', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language.getLanguage() ?? 'en');
  }

  ngOnInit() {}
}
