import React from 'react';
import PT from 'prop-types';

function Author({ avatarImage, dark, color }) {
  return (
    <section className="author">
      <div className="avatar" />
      <div className="text">
        <h3>Personal Blog Of Nick Smith</h3>
        <p />
      </div>
      <style jsx>{`
            .author {
                box-sizing: border-box;
                height: 150px;
                width: 100%;
                display: flex;
                align-items: center;
                border-radius: 10px;
                border: 1px solid #fff;
                padding: 0 20px;
                background: ${dark ? '#30353d' : '#fff'};
                box-shadow: ${dark ? 'none' : '0 3px 35px rgba(0,0,0,0.1)'};
            }

            .avatar {
                background-image: url("${avatarImage}");
                background-size: cover;
                background-position: center;
                height: 100px;
                width: 100px;
                border-radius: 50%;
            }

            .text {
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                margin-left: 30px;
            }

            h3, p {
                color: ${color};
                margin: 0px;
                margin-bottom: 10px;
            }

            @media (max-width: 900px) {
              .author {
                padding: 0 10px;
                height: 100px;
              }

              .avatar {
                height: 60px;
                width: 60px;
              }  

              .text {
                height: 60px;
                margin-left: 20px;
              }

              h3 {
                font-size: 16px;
              }
            }
        `}
      </style>
    </section>
  );
}

Author.propTypes = {
  avatarImage: PT.string.isRequired,
  dark: PT.bool.isRequired,
  color: PT.string.isRequired,
};

export default Author;
