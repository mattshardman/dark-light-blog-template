import React, { useState } from 'react';
import PT from 'prop-types';

function SignUpForm({
  sendResult, namePlaceHolder, emailPlaceHolder, btnText, altColors, textColorForDark,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form action="" className="form" onSubmit={e => sendResult(e)}>
      <input
        type="text"
        placeholder={namePlaceHolder}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder={emailPlaceHolder}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">{btnText}</button>
      <style jsx>{`
      .form {
        width: 75%;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input {
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        border: 1px solid #ddd;
        padding: 0 20px;
        border-radius: 20px;
        font-size: 14px;
        outline: none;
        transition: border 420ms;
    }

    input:focus {
        border: 1px solid #484848;
    }

    button {
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        background: ${altColors[0]};
        color: ${textColorForDark};
        border: 1px solid${altColors[0]};
        font-size: 16px;
        border-radius: 20px;
        outline: none;
    }

    button:hover {
        cursor: pointer;
        box-shadow: inset 0 -4px 40px rgba(0,0,0,0.1);
    }

    @media (max-width: 500px) {
        .sign-up {
            height: 450px;
            flex-direction: column;
        }

        .text {
            width: 75%;
        }

        .form {
            width: 80%;
        }
    }
    `}
      </style>
    </form>
  );
}

SignUpForm.propTypes = {
  sendResult: PT.func.isRequired,
  namePlaceHolder: PT.string.isRequired,
  emailPlaceHolder: PT.string.isRequired,
  btnText: PT.string.isRequired,
  altColors: PT.arrayOf(PT.string.isRequired).isRequired,
  textColorForDark: PT.string.isRequired,
};

export default SignUpForm;
