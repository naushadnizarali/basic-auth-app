export interface IPayload {
  userId: number;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  userTypeId: number;
  userType: string;
  isActive: boolean;
  password?: string;
}
