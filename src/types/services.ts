export const validServices = ['Basic Wash', 'Deluxe Wash', 'Premium Detail'] as const;
export type ServiceType = typeof validServices[number];

export function isValidService(service: string): service is ServiceType {
  return validServices.includes(service as ServiceType);
}

export type VehicleType = 'Small Car' | 'Medium Car' | 'Large Car' | 'Motorcycle';

export type Service = {
  type: ServiceType;
  vehicleType: VehicleType;
  isExteriorOnly: boolean;
}; 