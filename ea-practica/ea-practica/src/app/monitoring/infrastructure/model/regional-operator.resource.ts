/**
 * Represents a regional operator received from DummyJSON.
 * @remarks Includes user identification and location information.
 * @author Student
 */
export interface RegionalOperatorResource {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    stateCode: string;
    country: string;
  };
}

/**
 * Represents the response from the DummyJSON users endpoint.
 * @remarks Contains the collection of regional operators.
 * @author Student
 */
export interface RegionalOperatorsResponse {
  users: RegionalOperatorResource[];
  total: number;
  skip: number;
  limit: number;
}
