import { FormSelectInput } from "@/types/renderFormItem";
import React from "react";
import StatusHandler from "../statusHandler/StatusHandler";

const RenderSelectInput = ({ label, name, options, status, refetch, error, inputProps }: FormSelectInput) => {
  return (
    <StatusHandler status={status} refetch={refetch}>
      <div className="w-full">
        <Label htmlFor={name}>{label}</Label>
        <select
          id={name}
          className="form-select appearance-none
      block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-none bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded-md
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          {...inputProps}
        >
          {options.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </div>
    </StatusHandler>
  );
};

export default RenderSelectInput;
