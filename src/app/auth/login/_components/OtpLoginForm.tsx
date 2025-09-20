import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginWithOTPForm } from "../login-types";
import { Loader2 } from "lucide-react";
import RenderFormItem from "@/components/formItems/RenderFormItem";
import ValidateOtp from "./ValidateOtp";
import { Button, CircularProgress } from "@mui/material";
import { FormFieldInput } from "@/types/renderFormItem";

const OtpLoginForm = () => {
  const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginWithOTPForm>({
    defaultValues: {
      phoneNumber: "",
    },
    // resolver: zodResolver(phoneNumberValidation),
  });

  async function onSubmitHandler({ phoneNumber }: LoginWithOTPForm) {
    // const result = await sendOtp(phoneNumber);
    // if (result.success) {
    //   toast.success(`رمز یکبار مصرف به شماره ${phoneNumber} ارسال گردید`);
    //   setIsOtpSend(true);
    // } else if (result.errors) {
    //   toast(<span className="text-error">{result.errors?.form?.[0]}</span>);
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
        {OTP_LOGIN_FORM_ITEMS.map((item) => (
          <Controller
            key={item.name}
            name={item.name as keyof LoginWithOTPForm}
            control={control}
            render={({ field }) => {
              return (
                <RenderFormItem
                  {...item}
                  inputProps={{
                    ...field,
                    ...item.inputProps,
                    disabled: isOtpSend,
                  }}
                  error={errors?.[item.name as keyof LoginWithOTPForm]?.message}
                />
              );
            }}
          />
        ))}
        {!isOtpSend && (
          <Button className="w-full mt-2" disabled={isSubmitting} endIcon={isSubmitting && <CircularProgress />}>
            ارسال رمز یکبار مصرف
          </Button>
        )}
      </form>
      <ValidateOtp isOtpSend={isOtpSend} phoneNumber={watch("phoneNumber")} />
    </>
  );
};

export default OtpLoginForm;

const OTP_LOGIN_FORM_ITEMS: FormFieldInput<LoginWithOTPForm>[] = [
  {
    name: "phoneNumber",
    inputType: "text",
    label: "تلفن همراه",
    inputProps: {
      placeholder: "مثال 09123456789",
    },
  },
];
