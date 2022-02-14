import React,{useState} from 'react';
import loginForm from './loginForm';


function login(){
    const adminUser ={
        email:"keymaster@admin.com",
        password:"keymaster"
    }
    const [user,setUser] = useState(nome="", email="")
    const [error,setError] = useState("")

    const Login = details =>{
        console.log(details)

        if(details.email==adminUser.email && details.password==adminUser.password){
            console.log("Logged in");
            setUser({
                nome: details.nome,
                email: details.email
            });
        }else{
            console.log("Details do not match!")
        }
    }
    
    const Logout = () =>{
        setUser(nome="", email="");
    }
    
    
    
    return (
        <div className="login">
            {(user.email != "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.nome}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) :(
                <loginForm Login={Login} error={error}/>
            )

            }
        </div>
    );
}

export default login;