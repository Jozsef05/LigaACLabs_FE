import { Car } from './car';

export interface User {
    id: number;
    name: string;
    birthDate: Date;
    cars: Car[];
}