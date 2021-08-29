import React from "react";
import { ExclamationIcon } from "@heroicons/react/solid";

type ErrorMessagePros = {
  error: string;
};

export const ErrorMessage = ({ error }: ErrorMessagePros) => {
  return (
    <div className="rounded-md bg-red-10">
      <div className="flex">
        <div className="py-4 text-sm text-red-700">
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};
