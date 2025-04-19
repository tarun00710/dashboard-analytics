// actions/auth.ts
'use server'
import { LoginResponse, SignupResponse, User } from '@/utils/types';
import { loginSchema, mockUsers, signupSchemaObj } from '@/utils/constants';

export async function login(prev:any,formData: FormData): Promise<LoginResponse> {
  await new Promise(resolve => setTimeout(resolve, 400))
  
  const values = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }
  
  // Validate form data
  const validation = loginSchema.safeParse(values)
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return { 
      success: false, 
      errors: {
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      }
    }
  }
  
  // Find user
  const foundUser = mockUsers.find(user => user.email === values.email)
  
  if (foundUser && values.password === 'password') {
    return { 
      success: true,
      user: foundUser,
      token: `mock-jwt-token-${foundUser.id}`
    }
  }
  
  return { 
    success: false, 
    errors: { _form: 'Invalid email or password' } 
  }
}

export async function signup(prev:any,formData: FormData): Promise<SignupResponse> {
  await new Promise(resolve => setTimeout(resolve, 400))
  
  const values = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  
  const validation = signupSchemaObj.safeParse(values)
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return { 
      success: false, 
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      }
    }
  }
  
  // Check if email already exists
  const existingUser = mockUsers.find(user => user.email === values.email)
  if (existingUser) {
    return { 
      success: false, 
      errors: { email: 'Email already exists' } 
    }
  }
  
  // Create new user
  const newUser: User = {
    id: `${Date.now()}`,
    email: values.email,
    name: values.name,
    role: 'user' 
  }
  
  return { 
    success: true,
    user: newUser,
    token: `mock-jwt-token-${newUser.id}`
  }
}