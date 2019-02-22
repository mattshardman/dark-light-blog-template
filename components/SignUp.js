import React from 'react';
import PT from 'prop-types';
import withTheme from '../lib/withTheme';

function SignUp({ theme }) {
  const {
    textColorForLight, textColorForDark, altColors,
  } = theme;

  return (
    <section className="sign-up">
      <div className="text-section">
        <div className="text">
          <img
            src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1550851835/nick-blog/email.svg"
            alt=""
            height={50}
          />
          <div className="title-section">
            <h1>Sign Up</h1>
            <p>Sign up to my newsletter, you&apos;ll be notified every time I blog and get some juicy content.</p>
          </div>
        </div>
      </div>
      <div className="form-section">
        <form action="" className="form">
          <input type="text" placeholder="Your first name" />
          <input type="text" placeholder="Your email address" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <style jsx>{`
        .sign-up {
            margin: 20px 0;
            border-radius: 5px;
            overflow: hidden;
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            box-shadow: 0 3px 35px rgba(0,0,0,0.2);
        }

        .text-section {
            width: 100%;
            height: 100%;
            color: ${textColorForLight};
            background: #fafafa;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .text  {
            width: 75%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .title-section {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .title-section h1, p {
            margin: 5px 0;
        }

        .title-section p {
            line-height: 1.4;
        }

        .form-section {
            height: 100%;
            background: #fff;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

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
    </section>
  );
}

SignUp.propTypes = {
  theme: PT.shape(PT.string.isRequired).isRequired,
};

export default withTheme(SignUp);
