export interface User {
  email: string;
  id?: number;
  firstName?: string;
  lastName?: string;
  tokens?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface Authenticate {
  email: string;
  password: string;
}
