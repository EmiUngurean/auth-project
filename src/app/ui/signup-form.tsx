"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/signup-form-schema";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const processForm: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const renderError = (message: string | undefined) => {
    return <p className="text-red-600 text-sm">{message}</p>;
  };

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="bg-white p-5 rounded-2xl w-[400px] shadow-xl text-black">
        <h2 className="text-2xl flex justify-center mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit(processForm)}>
          <div className="pt-4">
            <div className="gap-4 grid grid-cols-2">
              <div className="mb-3">
                <label className="w-full">First Name:</label>
                <div className="w-full mt-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border w-full border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                    {...register("firstName")}
                  />
                  {errors.firstName && renderError(errors.firstName.message)}
                </div>
              </div>
              <div className="mb-3">
                <label className="w-full">Last Name:</label>
                <div className="w-full mt-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border w-full border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                    {...register("lastName")}
                  />
                  {errors.lastName && renderError(errors.lastName.message)}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="w-full">Email:</label>
              <div className="w-full mt-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                  {...register("email")}
                />
                {errors.email && renderError(errors.email.message)}
              </div>
            </div>

            <div className="gap-3 grid grid-cols-2">
              <div className="mb-3">
                <label className="w-full">Password:</label>
                <div className="w-full mt-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border w-full border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                    {...register("password")}
                  />
                  {errors.password && renderError(errors.password.message)}
                </div>
              </div>
              <div className="mb-3">
                <label className="w-full">Confirm Password:</label>
                <div className="w-full mt-1">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border w-full border-gray-300 rounded-md py-2 px-3 hover:border-gray-700"
                    {...register("password")}
                  />
                  {errors.password && renderError(errors.password.message)}
                </div>
              </div>
            </div>

            <div className="my-3 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="flex gap-2 justify-center mt-4">
              <p>Already have an account?</p>
              <Link href="/login" className="text-indigo-500">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
