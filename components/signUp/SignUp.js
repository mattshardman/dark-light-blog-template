import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import axios from 'axios';
import withTheme from '../../lib/withTheme';
import withConfig from '../../lib/withConfig';
import SignUpForm from './SignUpForm';

function SignUp({ theme, signUp }) {
  const {
    textColorForLight,
  } = theme;

  const {
    title, text, leftImage, signedUpImage, signedUpMessage,
  } = signUp;


  const [signedUp, setSignedUp] = useState(false);

  const sendResult = (e, name, email) => {
    e.preventDefault();
    axios.post('/api/send', {
      name,
      email,
    }).then(() => {
      localStorage.setItem('signed-up', true);
      setSignedUp(true);
    });
  };

  useEffect(() => {
    const hasAlreadySignedUp = localStorage.getItem('signed-up');
    if (hasAlreadySignedUp) {
      setSignedUp(true);
    }
  }, []);

  return (
    <section className="sign-up">
      <div className="text-section">
        <div className="text">
          <img
            src={leftImage}
            alt=""
            height={50}
          />
          <div className="title-section">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="form-section">
        {signedUp
          ? (
            <div className="like">
              <img
                src={signedUpImage}
                alt=""
                height={50}
              />
              <p>{signedUpMessage}</p>
            </div>
          )
          : (
            <SignUpForm
              {...signUp}
              {...theme}
              sendResult={sendResult}
            />
          )
      }
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

        .like {
            display: flex;
            width: 75%;
            height: 65%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${textColorForLight};
        }

        .like p {
            margin-top: 20px;
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
  signUp: PT.shape(PT.string.isRequired).isRequired,
};

export default withConfig(withTheme(SignUp));
