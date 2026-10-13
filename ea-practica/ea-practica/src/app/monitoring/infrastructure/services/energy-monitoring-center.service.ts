
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { EnergyMonitoringCenter } from '../../domain/model/energy-monitoring-center.entity';
import { EnergyMonitoringCenterResource } from '../model/energy-monitoring-center.resource';
import { EnergyMonitoringCenterAssembler } from '../mappers/energy-monitoring-center.assembler';

/**
 * Provides access to energy monitoring centers.
 * @remarks Retrieves centers from the local JSON Server API.
 * @author Student
 */
@Injectable({
  providedIn: 'root'
})
export class EnergyMonitoringCenterService {
  private readonly http = inject(HttpClient);

  private readonly endpoint =
    environment.serverApiUrl + environment.energyMonitoringCentersPath;

  /**
   * Retrieves all energy monitoring centers.
   */
  getAll(): Observable<EnergyMonitoringCenter[]> {
    return this.http.get<EnergyMonitoringCenterResource[]>(this.endpoint).pipe(
      map(resources =>
        resources.map(resource =>
          EnergyMonitoringCenterAssembler.toEntity(resource)
        )
      )
    );
  }
}
