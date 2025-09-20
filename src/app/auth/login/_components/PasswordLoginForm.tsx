"use client";

import RenderFormItem from "@/components/formItems/RenderFormItem";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { LoginWithPasswordForm } from "../login-types";
import { Loader2 } from "lucide-react";
import { Button, CircularProgress } from "@mui/material";
import { FormFieldInput } from "@/types/renderFormItem";

const PasswordLoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginWithPasswordForm>({
    defaultValues: {
      password: "",
      phoneNumber: "",
    },
  });

  async function onSubmitHandler(values: LoginWithPasswordForm) {}

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      {PASSWORD_LOGIN_FORM.map((item) => (
        <Controller
          key={item.name}
          name={item.name as keyof LoginWithPasswordForm}
          control={control}
          render={({ field }) => {
            return (
              <RenderFormItem
                {...item}
                inputProps={{ ...field, ...item.inputProps }}
                error={errors?.[item.name as keyof LoginWithPasswordForm]?.message}
              />
            );
          }}
        />
      ))}
      <Button className="w-full mt-2" disabled={isSubmitting} endIcon={isSubmitting && <CircularProgress />}>
        ورود
      </Button>
    </form>
  );
};

export default PasswordLoginForm;

const PASSWORD_LOGIN_FORM: FormFieldInput<LoginWithPasswordForm>[] = [
  {
    name: "phoneNumber",
    inputType: "text",
    label: "تلفن همراه",
  },
  {
    name: "password",
    inputType: "text",
    label: "رمز عبور",
    inputProps: {
      type: "password",
    },
  },
];
