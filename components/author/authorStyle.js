import PT from 'prop-types';

const AuthorStyle = ({ dark }) => (
  <style jsx>{`
  .author-card {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: 1px solid #fff;
      padding: 30px;
      background: ${dark ? '#30353d' : '#fff'};
      box-shadow: ${dark ? 'none' : '0 3px 35px rgba(0,0,0,0.1)'};
  }

  .title-section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }

  .avatar {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 75px;
    border-radius: 50%;
  } 

  .title {
    height: 75px;
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: space-between;
  }

  .title h1 {
    font-size: 40px;
    margin: 0;
  }

  .title p {
    color: #1ca8ff;
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 500px) {
    .author-card {
      padding: 16px;
    }

    .avatar {
      height: 60px;
      width: 60px;
    }

    .title {
      height: 60px;
    }

    .title h1 {
      font-size: 30px;
    }
  
    .title p {
      font-size: 18px;
    }

    
  }
  
  .intro-section {
    margin: 30px 0;
    line-height: 1.4;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .intro-section p {
    color: ${dark ? '#fff' : '#5b5b5b'};
    margin: 0;
    padding: 0;
  }

  .social-media {
    height: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
    color: ${dark ? '#fff' : '#484848'};
    transition: color 1s;
  }

  a:hover {
    color: #1ca8ff;
  }
  `}
  </style>
);

AuthorStyle.propTypes = {
  dark: PT.bool.isRequired,
};

export default AuthorStyle;
