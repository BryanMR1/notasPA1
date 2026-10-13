
export class EnergyReportItem {
  constructor(
    public id: number,
    public centerId: number,
    public energyType: string,
    public countryCode: string,
    public countryName: string,
    public consumption: number,
    public production: number,
    public year: number,
    public registeredAt: string
  ) {}
}
