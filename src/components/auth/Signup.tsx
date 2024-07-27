import { FC, useCallback, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";
import { generateRequest } from "../../services/generateRequest";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks";







const Signup: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [name,setName] = useState<string>("");
  const [loading, setloading] = useState<boolean>(true);
  const navigate = useNavigate();
  const {toastError} = useToast();

  const onClick = useCallback(async()=>{

    try{
      setloading(true);
      console.log(name,email,password)
      await generateRequest({
        path:'auth/sign-up',
        method:"POST",
        body:{
          userName:name,
          email,
          password
        }

      });
      navigate('/')
    }catch(error){
      toastError(error instanceof Error?error.message:"Something went wrong")
      
    }finally{
      setloading(false)
    }
    
    
  
  },[email,password]);

  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <h6 className="text-2xl flex justify-center ">SignUp</h6>
      <span>User Name :</span>
      <TextInput placeHolder="Enter user name " onStateChange={(e)=>setName(e.target.value)}  />

      <span>Email :</span>
      <TextInput placeHolder="Enter email " onStateChange={(e)=>setEmail(e.target.value)} />

      <span>Password :</span>
      <TextInput placeHolder="Enter Password" onStateChange={(e)=>setPassword(e.target.value)} />

      <span>Confirm Password :</span>
      <TextInput placeHolder="Confirm Password" onStateChange={(e)=>setconfirmPassword(e.target.value)} />

      <AuthButton style={""} text={"SignUp"} onClick={onClick} />
    </div>
  );
};

export default Signup;
