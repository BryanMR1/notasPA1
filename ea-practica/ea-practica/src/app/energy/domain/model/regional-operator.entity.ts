
/**
 * Represents a regional operator in the energy domain.
 * @remarks Contains operator identification and location.
 * @author Student
 */
export class RegionalOperator {
  constructor(
    public id: number,
    public fullName: string,
    public countryCode: string,
    public countryName: string
  ) {}
}
