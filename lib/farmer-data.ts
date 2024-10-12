interface Field {
  name: string;
  product: string;
  area: number;
  providerName: string;
}

interface Farmer {
  id: number;
  picture: string;
  name: string;
  phoneNumber: string;
  address: string;
  address2: string;
  address3: string;
  birthdate: string;
  provider: string;
  submissionDate: string;
  studyLevel: string;
  languages: string[];
  dialects: string[];
  technician: string;
  organization: string;
  status: 'active' | 'inactive';
  fields: Field[];
}

const farmers: Farmer[] = [
  {
    id: 1,
    picture: '/farmers/images/happy_farmer_1.jpeg',
    name: 'Djibril Traore',
    phoneNumber: '123-456-7890',
    address: '123 Farm Lane, Countryside',
    address2: '456 Born Lane, Countryside',
    address3: '789 Dorm Lane, Countryside',
    birthdate: '1980-01-01',
    provider: 'Jane Smith',
    submissionDate: '2023-01-01',
    studyLevel: 'High School',
    languages: ['English', 'Spanish'],
    dialects: ['English', 'Spanish'],
    technician: 'Mike Johnson',
    organization: 'Farmers United',
    status: 'active',
    fields: [
      {
        name: 'Field 1',
        product: 'Corn',
        area: 10,
        providerName: 'Jane Smith'
      },
      {
        name: 'Field 2',
        product: 'Wheat',
        area: 15,
        providerName: 'Jane Smith'
      }
    ],
  },
  {
    id: 2,
    picture: '/farmers/images/happy_farmer_2.jpeg',
    name: 'Alice Zenith',
    phoneNumber: '987-654-3210',
    address: '456 Rural Road, Farmland',
    address2: '789 Born Lane, Farmland',
    address3: '123 Dorm Lane, Farmland',
    birthdate: '1975-05-15',
    provider: 'John Doe',
    submissionDate: '2023-02-15',
    studyLevel: 'College',
    languages: ['English', 'French'],
    dialects: ['English', 'French'],
    technician: 'Sarah Lee',
    organization: 'Agriculture Co-op',
    status: 'inactive',
    fields: [
      {
        name: 'Field A',
        product: 'Soybeans',
        area: 20,
        providerName: 'John Doe'
      },
      {
        name: 'Field B',
        product: 'Barley',
        area: 25,
        providerName: 'John Doe'
      }
    ],
  },
  {
    id: 3,
    picture: '/farmers/images/happy_farmer_3.jpeg',
    name: 'Carlos Rodriguez',
    phoneNumber: '555-123-4567',
    address: '789 Harvest Lane, Cropville',
    address2: '321 Silo Street, Cropville',
    address3: '654 Tractor Avenue, Cropville',
    birthdate: '1980-09-22',
    provider: 'Maria Garcia',
    submissionDate: '2023-03-10',
    studyLevel: 'High School',
    languages: ['Spanish', 'English'],
    dialects: ['Spanish', 'English'],
    technician: 'David Chen',
    organization: 'Green Fields Association',
    status: 'active',
    fields: [
      {
        name: 'Field X',
        product: 'Tomatoes',
        area: 5,
        providerName: 'Maria Garcia'
      },
      {
        name: 'Field Y',
        product: 'Peppers',
        area: 7,
        providerName: 'Maria Garcia'
      }
    ],
  },
  {
    id: 4,
    picture: '/farmers/images/happy_farmer_4.jpeg',
    name: 'Emily Thompson',
    phoneNumber: '222-333-4444',
    address: '101 Orchard Road, Fruitville',
    address2: '202 Apple Lane, Fruitville',
    address3: '303 Pear Street, Fruitville',
    birthdate: '1988-12-05',
    provider: 'Robert Brown',
    submissionDate: '2023-04-20',
    studyLevel: 'Bachelor\'s Degree',
    languages: ['English'],
    dialects: ['English'],
    technician: 'Lisa Wong',
    organization: 'Sustainable Farms Inc.',
    status: 'active',
    fields: [
      {
        name: 'Field Alpha',
        product: 'Apples',
        area: 12,
        providerName: 'Robert Brown'
      },
      {
        name: 'Field Beta',
        product: 'Peaches',
        area: 8,
        providerName: 'Robert Brown'
      }
    ],
  },
  {
    id: 5,
    picture: '/farmers/images/happy_farmer_5.jpeg',
    name: 'Rita Majoli',
    phoneNumber: '777-888-9999',
    address: '555 Desert Bloom Road, Oasistown',
    address2: '666 Palm Tree Lane, Oasistown',
    address3: '777 Cactus Avenue, Oasistown',
    birthdate: '1970-03-15',
    provider: 'Fatima Ali',
    submissionDate: '2023-05-05',
    studyLevel: 'Master\'s Degree',
    languages: ['Arabic', 'English'],
    dialects: ['Arabic', 'English'],
    technician: 'Omar Farooq',
    organization: 'Desert Bloom Cooperative',
    status: 'inactive',
    fields: [
      {
        name: 'Field Oasis',
        product: 'Dates',
        area: 30,
        providerName: 'Fatima Ali'
      },
      {
        name: 'Field Mirage',
        product: 'Olives',
        area: 18,
        providerName: 'Fatima Ali'
      }
    ],
  },
];

export default farmers;