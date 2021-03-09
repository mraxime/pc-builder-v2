// This data is the heart of the application. All components are dynamic based on this data.

const hardwares: Hardware[] = [
  {
    id: '0f09e4b059a0',
    name: 'Processor',
    models: [
      {
        id: '4b7786dfa6c9',
        name: 'AMD Ryzen Threadripper 3990X',
        category: 'processor',
        brand: 'AMD',
        price: 5431.91,
        specs: [
          { label: 'Cores', value: 64 },
          { label: 'Threads', value: 128 },
          { label: 'Socket', value: 'sTRX4' },
          { label: 'Base Speed', value: '2.9 GHz' },
          { label: 'Turbo Speed', value: '4.3 GHz' },
          { label: 'Integrated Graphics', value: 'None' },
        ],
      },
      {
        id: '20b5e1f9b274',
        name: 'AMD Ryzen 7 5800X',
        category: 'processor',
        brand: 'AMD',
        price: 499.99,
        specs: [
          { label: 'Cores', value: 8 },
          { label: 'Threads', value: 16 },
          { label: 'Socket', value: 'AM4' },
          { label: 'Base Speed', value: '3.8 GHz' },
          { label: 'Turbo Speed', value: '4.3 GHz' },
          { label: 'Integrated Graphics', value: 'None' },
        ],
      },
      {
        id: '09079effdc29',
        name: 'Intel Core i9-10900KF',
        category: 'processor',
        brand: 'Intel',
        price: 599.99,
        specs: [
          { label: 'Cores', value: 10 },
          { label: 'Threads', value: 20 },
          { label: 'Socket', value: 'LGA 1200' },
          { label: 'Base Speed', value: '3.7 GHz' },
          { label: 'Turbo Speed', value: '4.3 GHz' },
          { label: 'Integrated Graphics', value: 'None' },
        ],
      },
      {
        id: '2f5afb2e2382',
        name: 'Intel Core i9-7900X',
        category: 'processor',
        brand: 'Intel',
        price: 1581.18,
        specs: [
          { label: 'Cores', value: 10 },
          { label: 'Threads', value: 20 },
          { label: 'Socket', value: 'LGA 2066' },
          { label: 'Base Speed', value: '3.3 GHz' },
          { label: 'Turbo Speed', value: '4.3 GHz' },
          { label: 'Integrated Graphics', value: 'None' },
        ],
      },
      {
        id: '982723cf664f',
        name: 'AMD Ryzen 9 3900X',
        category: 'processor',
        brand: 'AMD',
        price: 659.62,
        specs: [
          { label: 'Cores', value: 12 },
          { label: 'Threads', value: 24 },
          { label: 'Socket', value: 'AM4' },
          { label: 'Base Speed', value: '3.8 GHz' },
          { label: 'Turbo Speed', value: '4.7 GHz' },
          { label: 'Integrated Graphics', value: 'None' },
        ],
      },
    ],
  },
  {
    id: 'a337b9b74747',
    name: 'Motherboard',
    models: [
      {
        id: '0fd8a5e1cad9',
        name: 'GIGABYTE TRX40 AORUS PRO WiFi',
        category: 'motherboard',
        brand: 'GIGABYTE',
        price: 699.99,
        specs: [
          { label: 'Form', value: 'ATX' },
          { label: 'Chipset', value: 'AMD TRX40' },
          { label: 'Socket', value: 'sTRX4' },
          { label: 'Memory Slots', value: 8 },
        ],
      },
      {
        id: '991c4aff12ee',
        name: 'ASUS ROG Zenith II Extreme Alpha',
        category: 'motherboard',
        brand: 'ASUS',
        price: 1154.81,
        specs: [
          { label: 'Form', value: 'Extended ATX' },
          { label: 'Chipset', value: 'AMD TRX40' },
          { label: 'Socket', value: 'sTRX4' },
          { label: 'Memory Slots', value: 8 },
        ],
      },
      {
        id: '0e7a0bba2785',
        name: 'MSI TRX40 PRO WiFi',
        category: 'motherboard',
        brand: 'MSI',
        price: 570.49,
        specs: [
          { label: 'Form', value: 'ATX' },
          { label: 'Chipset', value: 'AMD TRX40' },
          { label: 'Socket', value: 'sTRX4' },
          { label: 'Memory Slots', value: 8 },
          { label: 'Max Memory', value: '256 GB' },
        ],
      },
    ],
  },
  {
    id: '2230d591d63c',
    name: 'Power Supply',
    models: [
      {
        id: 'e1f54be81a91',
        name: 'Corsair RM 750 Series',
        category: 'power supply',
        brand: 'CORSAIR',
        price: 169.99,
        specs: [
          { label: 'Power', value: '750 W' },
          { label: 'Efficiency', value: '80+ Gold' },
          { label: 'Model', value: 'RM750' },
          { label: 'Color', value: 'Black' },
        ],
      },
      {
        id: '3fd7960156d8',
        name: 'EVGA BQ500',
        category: 'power supply',
        brand: 'EVGA',
        price: 119.99,
        specs: [
          { label: 'Power', value: '600 W' },
          { label: 'Efficiency', value: '80+ Bronze' },
          { label: 'Model', value: 'BR' },
          { label: 'Color', value: 'Black' },
        ],
      },
      {
        id: 'cccd278f6f88',
        name: 'Seasonic S12III 500',
        category: 'power supply',
        brand: 'SEASONIC',
        price: 129.99,
        specs: [
          { label: 'Power', value: '500 W' },
          { label: 'Efficiency', value: '80+ Bronze' },
          { label: 'Model', value: 'S12III' },
          { label: 'Color', value: 'Black' },
        ],
      },
    ],
  },
  {
    id: '2f1b830b80ac',
    name: 'Memory',
    models: [
      {
        id: '50a2fcc74490',
        name: 'G.SKILL Trident Z Royal Series, 16GB',
        category: 'memory',
        brand: 'G.SKILL',
        price: 729.99,
        specs: [
          { label: 'RAM Size', value: '16 GB' },
          { label: 'Quantity', value: '2 x 8 GB' },
          { label: 'Model', value: 'Trident Z Royal' },
          { label: 'Type', value: 'DDR4' },
        ],
      },
      {
        id: '08ab08ea8ca3',
        name: 'Corsair Vengeance RGB Pro 16GB',
        category: 'memory',
        brand: 'CORSAIR',
        price: 599.99,
        specs: [
          { label: 'RAM Size', value: '16 GB' },
          { label: 'Quantity', value: '2 x 8 GB' },
          { label: 'Model', value: 'Vengeance RGB Pro' },
          { label: 'Type', value: 'DDR4' },
        ],
      },
      {
        id: 'df0407b6be43',
        name: 'Thermaltake TOUGHRAM RGB White',
        category: 'memory',
        brand: 'THERMALTAKE',
        price: 570.49,
        specs: [
          { label: 'RAM Size', value: '16 GB' },
          { label: 'Quantity', value: '2 x 8 GB' },
          { label: 'Model', value: 'Toughram RGB' },
          { label: 'Type', value: 'DDR4' },
        ],
      },
      {
        id: 'f13524239b25',
        name: 'Corsair Vengeance LPX, 64GB',
        category: 'memory',
        brand: 'CORSAIR',
        price: 689.99,
        specs: [
          { label: 'RAM Size', value: '64 GB' },
          { label: 'Quantity', value: '2 x 32 GB' },
          { label: 'Model', value: 'Vengeance LPX' },
          { label: 'Type', value: 'DDR4' },
        ],
      },
    ],
  },
];

export default hardwares;

export type Hardware = {
  id: string;
  name: string;
  models: Model[];
};

export type Model = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  specs: Spec[];
};

type Spec = {
  label: string;
  value: string | number;
};
