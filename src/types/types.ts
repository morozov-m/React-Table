export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: 'male' | 'female' | string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: 'admin' | 'moderator' | 'user' | string;
}

export interface ISort {
  sortBy:
    | 'firstName'
    | 'lastName'
    | 'maidenName'
    | 'age'
    | 'gender'
    | 'phone'
    | null;
  order: 'asc' | 'desc' | null;
}

export interface ITableHead {
  text: string;
  onclick?: () => void;
  hasIcon?: boolean;
  sort?: ISort;
  field?:
    | 'firstName'
    | 'lastName'
    | 'maidenName'
    | 'age'
    | 'gender'
    | 'phone'
    | 'email'
    | 'country'
    | 'city';
  columnWidths: number;
  handleResize: (
    field:
      | 'firstName'
      | 'lastName'
      | 'maidenName'
      | 'age'
      | 'gender'
      | 'phone'
      | 'email'
      | 'country'
      | 'city',
    newWidth: number
  ) => void;
}

export interface ITableRow {
  onclick: () => void;
  user: IUser;
}

export interface IModal {
  user: IUser;
  onclick: () => void;
}

export interface ITable {
  onclick: (user: IUser) => void;
  handleSort: (
    field:
      | 'firstName'
      | 'lastName'
      | 'maidenName'
      | 'age'
      | 'gender'
      | 'phone'
      | null
  ) => void;
  sort: ISort;
  users: IUser[];
  isLoading: boolean;
  error: string;
}

export interface IFilter {
  onclick: () => void;
  isOpen: boolean;
  onclickFilter: (value: string, id: string, keyUrl: string) => void;
  filterValue: IFilterValue;
  removeFilter: () => void;
}

export interface ISelectValue {
  hairColor: string[];
  typeColor: string[];
  city: string[];
  role: string[];
  eyeColor: string[];
  gender: string[];
}

export interface IFilterField {
  array: string[];
  tittle: string;
  id: string;
  onclick: (value: string, id: string, keyUrl: string) => void;
  filterValue: IFilterValue;
  keyUrl: string;
}

export interface IFilterValue {
  value: string;
  id: string;
  keyUrl: string;
}

export interface IPagination {
  plusPage: () => void;
  minusPage: () => void;
  page: number;
  maxPage: number;
}

export interface ISearch {
  getSearchValue: (text: string) => void;
}

export interface ISearchInfo {
  users: IUser[];
  removeSearch: () => void;
  search: string;
  totalUsers: number;
}
