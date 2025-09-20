import RenderFormItem from "@/components/formItems/RenderFormItem";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormItems } from "../signUp-types";
import { FormFieldInput } from "@/types/renderFormItem";
import { Button, CircularProgress } from "@mui/material";
// import { toast } from "sonner";

const ValidatePhoneNumber = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Pick<SignUpFormItems, "phoneNumber">>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function onSubmitHandler() {
    // async function onSubmitHandler(values: Pick<SignUpFormItems, "phoneNumber">) {
    // const result = await handleSignUp({...values, phoneNumber: validatedPhoneNumber});
    // if (result.success) {
    //   toast.success("رمز یکبار مصرف به شماره تلفن ارسال گردید");
    // } else if (result.errors?.form?.[0]) {
    //   toast(<span className="text-error">خطا در ارسال رمز یکبار مصرف</span>, {
    //     description: (
    //       <span className="text-error">{result.errors?.form?.[0]}</span>
    //     ),
    //   });
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      {SIGN_UP_FORM_ITEMS.map((item) => (
        <Controller
          key={item.name}
          name={item.name as keyof Pick<SignUpFormItems, "phoneNumber">}
          control={control}
          render={({ field }) => {
            return (
              <RenderFormItem
                {...item}
                inputProps={{ ...field, ...item.inputProps } as any}
                error={errors.phoneNumber?.message}
              />
            );
          }}
        />
      ))}
      <Button className="w-full mt-2" disabled={isSubmitting}>
        {isSubmitting && <CircularProgress />}
        ثبت نام
      </Button>
    </form>
  );
};

export default ValidatePhoneNumber;

const SIGN_UP_FORM_ITEMS: FormFieldInput<SignUpFormItems>[] = [
  {
    name: "phoneNumber",
    inputType: "text",
    label: "تلفن همراه",
    inputProps: {
      placeholder: "مثال 09123456789",
    },
  },
];
