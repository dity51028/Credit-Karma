import { FC, useEffect, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";
import { useToast } from "../../hooks";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    
    const {toastSuccess} = useToast();
    toastSuccess('Its done');
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <h6 className="text-2xl flex justify-center ">Login</h6>
      <span>Email :</span>
      <TextInput placeHolder="Enter Email Id"  onStateChange={()=>{}} style={""} />

      <span>Password :</span>
      <TextInput placeHolder="Enter password" onStateChange={()=>{}} style={""} />

      <AuthButton style={""} text={"Login"} onClick={() => {}} />
    </div>
  );
};

export default Login;
