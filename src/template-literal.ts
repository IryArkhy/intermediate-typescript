type ArtFeatures = 'cabin' | 'tree' | 'sunset';
type Colors = 'red' | 'darkSiena' | 'blue';

type ArtMethodsNames =
  `feature${Capitalize<ArtFeatures>}${Capitalize<Colors>}`; // all unique combinations

interface DataState {
  digits: number[];
  names: string[];
  flags: Record<'darkMode' | 'mobile', boolean>;
}

type DataSDK = {
  // The mapped type
  [K in keyof DataState as `set${Capitalize<K>}`]: (
    arg: DataState[K],
  ) => void;
};

function load(dataSDK: DataSDK) {
  dataSDK.setDigits([14]);
  dataSDK.setFlags({ darkMode: true, mobil: false });
}
