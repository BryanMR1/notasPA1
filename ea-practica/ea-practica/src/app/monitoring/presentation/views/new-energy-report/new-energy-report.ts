
import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

import { EnergyMonitoringCenter } from '../../../domain/model/energy-monitoring-center.entity';
import { EnergyMonitoringCenterService } from '../../../infrastructure/services/energy-monitoring-center.service';
import { EnergyReportItemService } from '../../../infrastructure/services/energy-report-item.service';
import { RegionalOperator } from '../../../../energy/domain/model/regional-operator.entity';
import { RegionalOperatorService } from '../../../../energy/infrastructure/services/regional-operator.service';

/**
 * Allows users to register international energy reports.
 * @remarks Handles validation, energy regions, translations and report creation.
 * @author Student
 */
@Component({
  selector: 'app-new-energy-report',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './new-energy-report.html',
  styleUrl: './new-energy-report.css'
})
export class NewEnergyReport implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly centerService = inject(EnergyMonitoringCenterService);
  private readonly reportService = inject(EnergyReportItemService);
  private readonly operatorService = inject(RegionalOperatorService);

  readonly centers = signal<EnergyMonitoringCenter[]>([]);
  readonly operators = signal<RegionalOperator[]>([]);
  readonly saving = signal(false);
  readonly error = signal('');

  readonly energyTypes = [
    'solar', 'wind', 'hydro', 'nuclear', 'gas', 'oil'
  ];

  readonly energyRegions: Record<string, string> = {
    solar: 'Africa',
    wind: 'Europe',
    hydro: 'South America',
    nuclear: 'North America',
    gas: 'Middle East',
    oil: 'Asia'
  };

  readonly form = this.fb.group({
    energyType: ['', Validators.required],
    operatorId: [null as number | null, Validators.required]
  });

  ngOnInit(): void {
    this.centerService.getAll().subscribe({
      next: centers => this.centers.set(centers),
      error: () => this.error.set('Unable to load energy centers.')
    });

    this.operatorService.getAll().subscribe({
      next: operators => this.operators.set(operators),
      error: () => this.error.set('Unable to load regional operators.')
    });
  }

  /**
   * Creates a report using the selected energy type and operator.
   */
  createReport(): void {
    if (this.form.invalid || this.saving()) return;

    const { energyType, operatorId } = this.form.getRawValue();

    const center = this.centers().find(
      item => item.energyType === energyType
    );

    const operator = this.operators().find(
      item => item.id === operatorId
    );

    if (!center || !operator) {
      this.error.set('Select a valid energy type and regional operator.');
      return;
    }

    // Temporary values until energy indicators are integrated.
    const production = 100;
    const consumption = 80;
    const year = new Date().getFullYear();

    if (production <= 0) {
      this.error.set('Production must be greater than zero.');
      return;
    }

    this.saving.set(true);
    this.error.set('');

    this.reportService.create({
      centerId: center.id,
      energyType: center.energyType,
      countryCode: operator.countryCode,
      countryName: operator.countryName,
      consumption,
      production,
      year,
      registeredAt: new Date().toISOString()
    }).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => {
        this.error.set('Unable to create energy report.');
        this.saving.set(false);
      }
    });
  }

  /**
   * Cancels report creation and returns to Home.
   */
  cancel(): void {
    this.router.navigate(['/home']);
  }
}
