
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

/**
 * Displays application navigation and language controls.
 * @remarks Supports switching between English and Spanish.
 * @author Student
 */
@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, MatToolbar, MatButton, TranslatePipe],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
  private readonly translate = inject(TranslateService);

  /**
   * Changes the application language.
   */
  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
