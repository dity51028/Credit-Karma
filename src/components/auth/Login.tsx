import { FC, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <h6 className="text-2xl flex justify-center ">Login</h6>
      <span>Email :</span>
      <TextInput state={email} onStateChange={setEmail} style={""} />

      <span>Password :</span>
      <TextInput state={password} onStateChange={setPassword} style={""} />

      <AuthButton style={""} text={"Login"} onClick={() => {}} />
    </div>
  );
};

export default Login;
