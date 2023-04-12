export interface DATA {
  C:    string;
  N:    string;
  TYPE: string;
  NID:  string;
  D:    string;
  T:    string;
  DAY:  string;
  S:    string;
  LN:   string;
  IMF:  boolean;
  OCG:  { [key: string]: Ocg };
  HEC:  boolean;
  id?: string;
  rate?: number;
}

export interface Ocg {
  ID:  string;
  N:   string;
  MBS: string;
  SO:  number;
  OC:  { [key: string]: Oc };
}

export interface Oc {
  ID:  string;
  O:   number;
  N:   string;
  MBS: string;
  G:   string;
  OD:  number;
  IMF: boolean;
}
