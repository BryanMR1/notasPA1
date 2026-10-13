
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { EnergyReportItem } from '../../domain/model/energy-report-item.entity';
import { EnergyReportItemResource } from '../model/energy-report-item.resource';
import { EnergyReportItemAssembler } from '../mappers/energy-report-item.assembler';

/**
 * Provides access to energy report API operations.
 * @remarks Uses HttpClient and maps resources to domain entities.
 * @author Student
 */
@Injectable({
  providedIn: 'root'
})
export class EnergyReportItemService {
  private readonly http = inject(HttpClient);

  private readonly endpoint =
    environment.serverApiUrl + environment.energyReportItemsPath;

  /**
   * Retrieves all registered energy reports.
   */
  getAll(): Observable<EnergyReportItem[]> {
    return this.http.get<EnergyReportItemResource[]>(this.endpoint).pipe(
      map(resources =>
        resources.map(resource =>
          EnergyReportItemAssembler.toEntity(resource)
        )
      )
    );
  }

  /**
   * Registers a new energy report.
   */
  create(report: Omit<EnergyReportItemResource, 'id'>):
    Observable<EnergyReportItem> {
    return this.http.post<EnergyReportItemResource>(
      this.endpoint,
      report
    ).pipe(
      map(resource => EnergyReportItemAssembler.toEntity(resource))
    );
  }
}
