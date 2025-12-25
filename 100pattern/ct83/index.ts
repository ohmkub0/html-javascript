type BaseVehicle = {
    make: string;
    model: string;
}

type MotoBike = BaseVehicle & {
    type: 'motobike',
    fuel: 'petrol'
}

type Car = BaseVehicle & {
    type: 'car';
    fuel: 'petrol' | 'diesel';
    doors: number;
}

type Vehicle = Car | MotoBike;

const myBik: Vehicle = {
    type: 'motobike',
    fuel: 'petrol',
    make: 'jj',
    model: 'a'
}