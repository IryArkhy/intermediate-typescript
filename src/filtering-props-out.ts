type DocKeys = Extract<keyof Document, `query${string}`>;
type KeyFilteredDoc = {
  [K in DocKeys]: Document[K];
};

// Filter based on the value

type Color = {
  red: string;
  green: number;
  blue: string;
};
// First part of the type bellow
type FilteredKeysObj<ToFilter, Condition> = {
  [Key in keyof ToFilter]: ToFilter[Key] extends Condition
    ? Key
    : never;
};

type RelevantColorsObj = FilteredKeysObj<Color, number>;
/**
 * {
 *  red: never;
 *  green: "green";
 *  blue: never;
 * }
 */
type RelevantColorKey = FilteredKeysObj<
  Color,
  number
>[keyof Color];
/**
 * "green"
 */

// But how do we know these keys in that object
// The solution for this problem in the complete type below
// Missing part `& keyof ToFilter`
// which makes sure those keys are there

// Get keys of type T whose values are assignable to type U
type FilteredKeys<ToFilter, Condition> = {
  [Key in keyof ToFilter]: ToFilter[Key] extends Condition
    ? Key
    : never;
}[keyof ToFilter] &
  keyof ToFilter;

type ElementFunction = (
  ...args: any[]
) => Element | Element[];

type RelevantDocumentKeys = FilteredKeys<
  Document,
  ElementFunction
>;

type ValueFilteredDoc = Pick<
  Document,
  RelevantDocumentKeys
>;

function load(doc: ValueFilteredDoc) {
  doc.querySelector('input');
}
