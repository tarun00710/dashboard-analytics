// Types
export type User = {
    id: string
    email: string
    name: string
    role: 'admin' | 'user'
  }
  
  export type LoginResponse = {
    success: boolean;
    user?: User;
    token?: string;
    errors?: {
      _form?: string;
      email?: string;
      password?: string;
    };
  }
  
  export type SignupResponse = {
    success: boolean;
    user?: User;
    token?: string;
    errors?: {
      _form?: string;
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    };
  }