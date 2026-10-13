
import { EnergyReportItem } from '../../domain/model/energy-report-item.entity';
import { EnergyReportItemResource } from '../model/energy-report-item.resource';

/**
 * Converts energy report API resources into domain entities.
 * @remarks Separates API data structures from domain models.
 * @author Student
 */
export class EnergyReportItemAssembler {
  static toEntity(resource: EnergyReportItemResource): EnergyReportItem {
    return new EnergyReportItem(
      resource.id,
      resource.centerId,
      resource.energyType,
      resource.countryCode,
      resource.countryName,
      resource.consumption,
      resource.production,
      resource.year,
      resource.registeredAt
    );
  }
}
