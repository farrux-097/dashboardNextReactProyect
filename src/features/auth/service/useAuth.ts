import { useMutation, useQuery } from "@tanstack/react-query";
import {  api } from "../../../shared/api";

export interface SignUp {
  fname: string;
  lname?: string;
  address?: string;
  email: string;
  password: string;
}

const authKey: string = "authKey";

export const useAuth = () => {
  const getAuthMe = () =>
    useQuery<any, any>({
      queryKey: [authKey],
      queryFn: () => api.get("auth/me").then((res) => res.data),
      retry: 0,
    });
  const getProfile = () =>
    useQuery<any, any>({
      queryKey: [authKey],
      queryFn: () => api.get("auth/me").then((res) => res.data),
      retry: 0,
    });

  const signIn = useMutation<any, any, { email: string; password: string }>({
    mutationFn: (body) => api.post("auth/signin", body).then((res) => res.data),
  });

  const signUp = useMutation<any, any, SignUp>({
    mutationFn: (body) => api.post("auth/signup", body).then((res) => res.data),
  });

  const confirmOtp = useMutation<
    any,
    any,
    { otp: string; verificationKey: string; email: string }
  >({
    mutationFn: (body) =>
      api.post("auth/confirm-otp", body).then((res) => res.data),
  });

  const sendNewOtpCode = useMutation<any, any, { email: string }>({
    mutationFn: (body) =>
      api.post("auth/new-opt", body).then((res) => res.data),
  });

  return { getAuthMe, signIn, signUp, confirmOtp, sendNewOtpCode,getProfile};
};
