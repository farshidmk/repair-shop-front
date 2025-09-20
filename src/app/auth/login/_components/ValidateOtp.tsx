import { useState } from "react";
import { LoginWithOTPForm } from "../login-types";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
// import { OTP_LENGTH } from "@/shared/constants";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

type Props = {
  isOtpSend: boolean;
  phoneNumber: string;
};

const ValidateOtp = ({ isOtpSend, phoneNumber }: Props) => {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginWithOTPForm>({
    defaultValues: {
      phoneNumber: phoneNumber,
      otp: "",
    },
  });

  async function onSubmitHandler(values: LoginWithOTPForm) {
    // const result = await checkOtp(values.otp!, phoneNumber);
    // if (result.success) {
    //   toast.success(`${result.data?.full_name} خوش آمدید`);
    //   router.push("/app");
    // } else if (result.errors) {
    //   toast(<span className="text-error">{result.errors?.form?.[0]}</span>);
    // }
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      <div
        className={`${
          isOtpSend ? "h-36 p-2" : "h-0 p-0"
        } transition-all mt-2 rounded-xl bg-gray-200/30 overflow-hidden`}
      >
        <p className="text-sm  mb-2">کد یکبار مصرف فرستاده شده به تلفن همراه را ارسال کنید</p>
        {/* <InputOTP
          autoFocus={isOtpSend}
          maxLength={6}
          value={otp}
          onChange={(value) => {
            setOtp(value);
            if (value.length === OTP_LENGTH) {
              onSubmitHandler({ phoneNumber, otp: value });
            }
          }}
          style={{ direction: "ltr" }}
        >
          <InputOTPGroup
            className="flex justify-center w-full"
            style={{ direction: "ltr" }}
          >
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP> */}
        <Button
          className="w-full mt-2"
          // disabled={isSubmitting || watch("otp")?.length !== OTP_LENGTH}
        >
          {isSubmitting && <Loader2 className="animate-spin" />}
          ورود
        </Button>
      </div>
    </form>
  );
};

export default ValidateOtp;
