import './Register.css';
import React from 'react';

function Register () {
  return (
    <>
      <div className={'main__reg'}>
        <div>
          <h2>Create Account</h2>
          <div className={'main__reg__info'}>
            <input type={'text'} placeholder={'First Name'}/>
            <input type={'text'} placeholder={'Last Name'}/>
            <input type={'text'} placeholder={'Email'}/>
            <input type={'text'} placeholder={'Password'}/>
            <button>Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
