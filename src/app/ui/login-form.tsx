"use client";

import { loginSchema } from "@/schemas/login-form-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const processForm: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="bg-white p-5 rounded-2xl w-[400px] shadow-xl text-black">
        <h2 className="text-2xl flex justify-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(processForm)}>
          <div className="pt-4">
            <div className="mb-3">
              <label className="w-full">Email:</label>
              <div className="w-full mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="w-full">Password:</label>
              <div className="w-full mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                  {...register("password")}
                />
              </div>
            </div>

            <div className="my-3 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="flex gap-2 justify-center mt-4">
              <p>{`Don't have an account?`}</p>
              <Link href="/sign-up" className="text-indigo-500">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
