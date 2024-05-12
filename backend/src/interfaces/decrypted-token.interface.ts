export interface DecryptedToken {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  iat?: number;
  exp?: number;
}
