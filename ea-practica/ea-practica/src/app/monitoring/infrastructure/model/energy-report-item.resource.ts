export interface EnergyReportItemResource {
  id: number;
  centerId: number;
  energyType: string;
  countryCode: string;
  countryName: string;
  consumption: number;
  production: number;
  year: number;
  registeredAt: string;
}
