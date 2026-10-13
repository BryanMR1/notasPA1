
import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { EnergyReportStore } from '../../../application/energy-report';
import { EnergyReportSummary } from '../../components/energy-report-summary/energy-report-summary';

/**
 * Displays the home view and registered energy reports.
 * @remarks Uses the EnergyReportStore for state management.
 * @author Student
 */
@Component({
  selector: 'app-home',
  imports: [EnergyReportSummary, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  readonly store = inject(EnergyReportStore);

  ngOnInit(): void {
    this.store.loadReports();
  }
}
