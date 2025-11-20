export interface LoginRequest {
  username: string;
  password: string;
}

export interface ErrorResponse {
  error: string;
}

export interface SuccessResponse {
  accessToken: string;
  id: string;
  message: string;
}

export interface SignUpRequest {
  username : string
  email : string
  fullName : string
  password : string
}

export interface ValidationError {
  username? : string
  email? : string
  fullname? : string
  password? : string

}

export interface SuccessSignUp {
  message : string
  created_at : Date
}

export function isErrorResponse(obj: any): obj is ErrorResponse {
  return obj && typeof obj === "object" && typeof obj.error === "string";
}

export function isValidationError(obj: any): obj is ValidationError {
  if (!obj || typeof obj !== "object") return false;

  const keys = ["username", "email", "fullname", "password"];

  const lowerKeys = Object.keys(obj).map(k => k.toLowerCase());

  return keys.some(k => lowerKeys.includes(k));
}

