
import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EnergyReportItem } from '../../../domain/model/energy-report-item.entity';

/**
 * Displays the summary of an energy report.
 * @remarks Uses Angular Material cards.
 * @author Student
 */
@Component({
  selector: 'app-energy-report-summary',
  imports: [MatCardModule, DatePipe],
  templateUrl: './energy-report-summary.html',
  styleUrl: './energy-report-summary.css'
})
export class EnergyReportSummary {
  readonly report = input.required<EnergyReportItem>();
}
