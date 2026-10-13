
import { RegionalOperator } from '../../domain/model/regional-operator.entity';
import { RegionalOperatorResource } from '../model/regional-operator.resource';

/**
 * Converts DummyJSON user resources into regional operators.
 * @remarks Maps API data to domain entities.
 * @author Student
 */
export class RegionalOperatorAssembler {

  /**
   * Converts a resource into a RegionalOperator entity.
   */
  static toEntity(resource: RegionalOperatorResource): RegionalOperator {
    return new RegionalOperator(
      resource.id,
      `${resource.firstName} ${resource.lastName}`,
      `US-${resource.address.stateCode}`,
      resource.address.country
    );
  }
}
