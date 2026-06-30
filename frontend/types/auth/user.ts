export type User = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type UserResponse = {
  name?: string;
  email?: string;
  createdAt?: Date;
};

export type RegisterResponse = {
  name?: string;
  email: string;
  createdAt: Date;
};

export type SignInResponse = Omit<RegisterResponse, "createdAt">;
