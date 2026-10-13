
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RegionalOperator } from '../../domain/model/regional-operator.entity';
import { RegionalOperatorsResponse } from '../model/regional-operator.resource';
import { RegionalOperatorAssembler } from '../mappers/regional-operator.assembler';

/**
 * Provides access to regional operators from DummyJSON.
 * @remarks Retrieves users and converts them into domain entities.
 * @author Student
 */
@Injectable({
  providedIn: 'root'
})
export class RegionalOperatorService {
  private readonly http = inject(HttpClient);

  private readonly endpoint =
    environment.dummyJsonApiUrl + environment.usersPath;

  /**
   * Retrieves regional operators from DummyJSON.
   */
  getAll(): Observable<RegionalOperator[]> {
    return this.http.get<RegionalOperatorsResponse>(
      this.endpoint,
      { params: { limit: '0' } }
    ).pipe(
      map(response =>
        response.users.map(resource =>
          RegionalOperatorAssembler.toEntity(resource)
        )
      )
    );
  }
}
