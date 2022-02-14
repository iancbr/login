import next from "next";
import React,{useState} from 'react';
import styles from './teste.module.css'
import loginpg from './loginForm'

function App({login,cadastro}){
    return (
        <div className={styles.header}>
            <h1>Home</h1>
            <input type="submit" value="Login"/>
            <input type="submit" value="Cadastre-se"/>
        </div>
    )
}

export default App;