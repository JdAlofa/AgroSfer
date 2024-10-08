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
    picture: '/happy farmer 1.jpeg',
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
    picture: '/happy farmer 2.jpeg',
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
  }
];

export default farmers;