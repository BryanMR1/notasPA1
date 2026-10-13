/**
 * Represents a regional operator received from DummyJSON.
 * @remarks Defines the API user response.
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
 * Represents the response containing regional operators.
 * @remarks Defines the DummyJSON users response.
 * @author Student
 */
export interface RegionalOperatorsResponse {
  users: RegionalOperatorResource[];
  total: number;
  skip: number;
  limit: number;
}
