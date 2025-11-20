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