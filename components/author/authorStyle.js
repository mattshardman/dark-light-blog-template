import PT from 'prop-types';

const AuthorStyle = ({ dark, color }) => (
  <style jsx>{`
  .author {
      box-sizing: border-box;
      min-height: 150px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: 1px solid #fff;
      padding: 30px 50px;
      background: ${dark ? '#30353d' : '#fff'};
      box-shadow: ${dark ? 'none' : '0 3px 35px rgba(0,0,0,0.1)'};
  }

  .main-section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  
  .avatar {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 110px;
      width: 110px;
      border-radius: 50%;
  }
  
  .text {
      display: flex;
      width: 75%;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
  }

  .social-media {
    height: 25px;
    padding-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  h3, p {
      color: ${color};
      margin: 0px;
  }

  h3 {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: ${color};
    transition: color 1s;
  }

  a:hover {
    color: #1ca8ff;
  }
  
  @media (max-width: 900px) {
    .author {
      padding: 30px;
      min-height: 100px;
    }

    .main-section {
      flex-direction: column;
    }
  
    .avatar {
      height: 125px;
      width: 125px;
      margin-bottom: 20px;
    }  
  
    .text {
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
    }
  
    h3 {
      font-size: 18px;
    }
  }
  `}
  </style>
);

AuthorStyle.propTypes = {
  dark: PT.bool.isRequired,
  color: PT.string.isRequired,
};

export default AuthorStyle;
