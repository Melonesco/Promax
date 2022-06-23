import './Email.css';
import React from 'react';

function Email () {
  return (
    <>
      <div className={'main__email'}>
        <div>
          <h2>Reset password</h2>
          <p>We will send you an email to reset your password.</p>
          <div className={'main__email__info'}>
            <input type={'text'} placeholder={'Email'}/>
            <button>Submit</button>
          </div>
          <div className="main__email-pas"><a href="/login">Cancel</a></div>
          <a className="main__email-create" href="/register">Create Account</a>
        </div>
      </div>
    </>
  );
}

export default Email;
