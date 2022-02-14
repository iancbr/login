import App from 'next/app';
import React, {useState} from 'react'
import login from './loginpg';

function loginForm({Login, error}) {
    const[details, setDetails]= useState({nome:"", email:"", password:""})

    const submitHandler =e =>{
        e.preventDefault();

        Login(details);

    }
    return (
        <div className='container2'>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {/*ERROR! */}
                    <div className='form-group'>
                        <label htmlFor='name'>Nome:</label>
                        <input type="text" name="nome" id='nome' onChange={e => setDetails({...details, nome: e.target.value})} value={details.nome}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name="email" id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Senha:</label>
                        <input type="password" name="password" id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                </div>
            </form>
            <App Login={login}/>
        </div>
    )
}

export default loginForm