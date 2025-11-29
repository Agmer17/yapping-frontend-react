import { useState } from "react";
import {
  type ErrorResponse,
  type LoginRequest,
  type SuccessResponse
} from "./../types/authTypes"
import { useAuth } from "../../../context/AuthContext";


export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [successData, setSuccessData] = useState<SuccessResponse | null>(null);
  const {login} = useAuth()

  async function postLoginForm(loginData: LoginRequest) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!res.ok) {
        let msg = "Request failed";

        try {
          const json = await res.json();
          msg = json.error || msg;
        } catch (_) { }

        throw new Error(msg);
      }

      const json: SuccessResponse = await res.json();
      
      setSuccessData(json);
      login(json.accessToken, json.id)


      return json;

    } catch (err) {
      if (err instanceof Error) {
        setError({ error: err.message });

      } else {
        setError({ error: "Unexpected error occurred" });
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, successData, postLoginForm, setError };
}
