import React from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { FormTextFieldInput } from "@/types/renderFormItem";

const RenderTextInput = ({
  name,
  label,
  inputProps,
  error,
}: FormTextFieldInput) => {
  return (
    <div className="w-full">
      <Label htmlFor={name} className="mb-1 font-semibold">
        {label}
      </Label>
      <Input id={name} name={name} {...inputProps} />
      {error && <p className="text-red-700 text-sm">{error}</p>}
    </div>
  );
};

export default RenderTextInput;
