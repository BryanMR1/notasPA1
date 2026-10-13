import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Displays a message for unsupported routes.
 * @remarks Provides navigation back to Home.
 * @author Student
 */
@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink, MatButton, TranslatePipe],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
  readonly router = inject(Router);
}
