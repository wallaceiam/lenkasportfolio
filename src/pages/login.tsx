import React, { useState, useCallback } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { fetchJson, useUser } from "../lib";
import { ErrorMessage } from "../components";

const Login = ({ redirect_to }) => {
  console.log(redirect_to);
  const { mutateUser } = useUser({
    redirectTo: redirect_to ?? "/",
    redirectIfFound: true,
  });

  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const body = {
        password: event.currentTarget.password.value,
      };

      try {
        const user = await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        mutateUser(user);
      } catch (error) {
        console.error("An unexpected error happened:", error);

        setErrorMsg(
          error.message === "Unauthorized" ? "Invalid password" : error.message
        );
      }
    },
    [mutateUser, setErrorMsg]
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {errorMsg && <ErrorMessage error={errorMsg} />}
          <form
            className="space-y-6"
            onSubmit={async (event) => await handleSubmit(event)}
          >
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showPwd ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onMouseDown={() => setShowPwd(true)}
                  onMouseLeave={() => setShowPwd(false)}
                  onMouseUp={() => setShowPwd(false)}
                >
                  {showPwd ? (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeOffIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.getInitialProps = ({ query }) => {
  const { redirect_to } = query;
  console.log(redirect_to);
  return redirect_to?.startsWith("/portfolio") ? { redirect_to } : {};
};

export default Login;
