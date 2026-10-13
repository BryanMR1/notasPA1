
import { Injectable, inject, signal } from '@angular/core';
import { EnergyReportItem } from '../domain/model/energy-report-item.entity';
import { EnergyReportItemService } from '../infrastructure/services/energy-report-item.service';

/**
 * Manages the state of energy reports.
 * @remarks Uses Angular Signals and the Store pattern.
 * @author Student
 */
@Injectable({
  providedIn: 'root'
})
export class EnergyReportStore {
  private readonly reportService = inject(EnergyReportItemService);

  readonly reports = signal<EnergyReportItem[]>([]);
  readonly loading = signal(false);
  readonly error = signal('');

  /**
   * Retrieves reports and updates the application state.
   */
  loadReports(): void {
    this.loading.set(true);
    this.error.set('');

    this.reportService.getAll().subscribe({
      next: reports => {
        this.reports.set(reports);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Unable to load energy reports.');
        this.loading.set(false);
      }
    });
  }
}
