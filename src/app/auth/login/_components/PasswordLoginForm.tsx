"use client";

import RenderFormItem from "@/components/formItems/RenderFormItem";
import LoginIcon from "@mui/icons-material/Login";
import { FormFieldInput } from "@/types/renderFormItem";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { LoginWithPasswordForm } from "../login-types";
import { useMutation } from "@tanstack/react-query";
import { ServerCall } from "@/types/server";

const PasswordLoginForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation<ServerCall, Error, ServerCall>({});
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

  async function onSubmitHandler(data: LoginWithPasswordForm) {
    mutate(
      {
        method: "post",
        url: "/auth/login-by-password",
        data,
      },
      {
        onSuccess: (res) => {
          console.log(res);
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-2">
      {PASSWORD_LOGIN_FORM.map((item) => (
        <Controller
          key={item.name}
          name={item.name as keyof LoginWithPasswordForm}
          control={control}
          render={({ field }) => {
            return (
              <RenderFormItem
                {...item}
                inputProps={{ ...field, ...item.inputProps } as any}
                error={errors?.[item.name as keyof LoginWithPasswordForm]?.message}
              />
            );
          }}
        />
      ))}
      <Button
        type="submit"
        fullWidth
        sx={{ mt: 0.5, mb: 2 }}
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        endIcon={isSubmitting ? <CircularProgress /> : <LoginIcon />}
      >
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
