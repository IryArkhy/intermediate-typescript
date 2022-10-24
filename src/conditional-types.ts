class Grill {
  startGas() {}
  stopGas() {}
}

class Oven {
  setTemperature(degrees: number) {}
}

// contains 3 type expressions:
// condition
// if true
// if false

/**
 * T extends 'grill' is not an equality check
 * it reads as "T is must be at least of "grill" type".
 * So the question is "Is everything to the left fits into everything to the right of extends keyword?"
 */
type CookingDevice<T> = T extends 'grill' ? Grill : Oven;

let device1: CookingDevice<'grill'>;

let device2: CookingDevice<'oven'>;
