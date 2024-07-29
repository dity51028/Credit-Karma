import { FC, useCallback, useEffect, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";
import { useToast } from "../../hooks";
import { generateRequest } from "../../services/generateRequest";
import { useNavigate } from "react-router-dom";


const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const {toastError} = useToast();

 

  const onclick= useCallback(async()=>{
    try{
      setLoading(true);

      await generateRequest({
        path:'auth/login',
        method:'POST',
        body:{
          email,
          password
        }
      });
      navigate ('/')

    }catch(error){

      toastError(error instanceof Error?error.message:"Something went wrong")


    }finally{
      setLoading(false)
    }
  },[email,password]);

  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <h6 className="text-2xl flex justify-center ">Login</h6>
      <span>Email :</span>
      <TextInput
        placeHolder="Enter Email Id"
        onStateChange={(e) => {setEmail(e.target.value)}}
        
      />

      <span>Password :</span>
      <TextInput
        placeHolder="Enter password"
        onStateChange={(e) => {setPassword(e.target.value)}}
        
      />

      <AuthButton style=""  text={"Login"} onClick={onclick} />
    </div>
  );
};

export default Login;
