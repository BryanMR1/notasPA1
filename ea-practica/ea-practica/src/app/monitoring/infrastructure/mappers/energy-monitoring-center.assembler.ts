
import { EnergyMonitoringCenter } from '../../domain/model/energy-monitoring-center.entity';
import { EnergyMonitoringCenterResource } from '../model/energy-monitoring-center.resource';

/**
 * Converts monitoring center API resources into domain entities.
 * @remarks Maps API responses to the monitoring domain model.
 * @author Student
 */
export class EnergyMonitoringCenterAssembler {
  static toEntity(resource: EnergyMonitoringCenterResource): EnergyMonitoringCenter {
    return new EnergyMonitoringCenter(
      resource.id,
      resource.name,
      resource.energyType
    );
  }
}
