type Fruit = {
  name: string;
  color: string;
  mass: number;
};

type Dict<T> = { [k: string]: T }; // <- index signature

const fruitCatalog: Dict<Fruit> = {};
fruitCatalog.apple; // Fruit

// mapped type
type MyRecord = { [FruitKey in 'apple' | 'cherry']: Fruit };

function printFruitCatalog(fruitCatalog: MyRecord) {
  fruitCatalog.cherry; // Fruit
  fruitCatalog.apple; // Fruit
  fruitCatalog.pineapple;
}

// Record
type MyRecord2<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType;
};

const obj: Record<string, number> = {
  hey: '',
  ho: 56,
};

// indexed access type
type PartOfWindow = {
  [Key in
    | 'document'
    | 'navigator'
    | 'setTimeout']: Window[Key];
};

const partofWindow: PartOfWindow = {
  document: window.Document,
  navigator: {},
};

type PickWindowProperties<Keys extends keyof Window> = {
  [Key in Keys]: Window[Key];
};

type PartOfWindow2 = PickWindowProperties<
  'document' | 'navigator' | 'setTimeout'
>;

type PickProperties<
  ValueType,
  Keys extends keyof ValueType,
> = {
  [Key in Keys]: ValueType[Key];
};

type PartOfWindow3 = PickProperties<
  Window,
  'document' | 'navigator' | 'setTimeout'
>;

let d: { [key: string]: Date } = {};

let record: { [K in 'endOfWeek' | 'startOfWeek']: Date } = {
  endOfWeek: new Date(),
  startOfWeek: new Date(),
};

d = record;

// because record is more specific and d is more broad
record = d;

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Pick & Mapping modifiers

/**
 * Make all properties in T optional
 */
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
/**
 * Make all properties in T required
 */
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};
/**
 * Make all properties in T readonly
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
