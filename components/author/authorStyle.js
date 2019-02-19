import PT from 'prop-types';

const AuthorStyle = ({ dark, avatarImage, color }) => (
  <style jsx>{`
  .author {
      box-sizing: border-box;
      min-height: 150px;
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 10px;
      border: 1px solid #fff;
      padding: 0 50px;
      background: ${dark ? '#30353d' : '#fff'};
      box-shadow: ${dark ? 'none' : '0 3px 35px rgba(0,0,0,0.1)'};
  }
  
  .avatar {
      background-image: url("${avatarImage}");
      background-size: cover;
      background-position: center;
      height: 90px;
      width: 90px;
      border-radius: 50%;
  }
  
  .text {
      min-height: 90px;
      display: flex;
      width: 70%;
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
      padding: 30px 10px;
      min-height: 100px;
    }
  
    .avatar {
      height: 60px;
      width: 60px;
    }  
  
    .text {
      min-height: 60px;
      margin-left: 20px;
    }
  
    h3 {
      font-size: 16px;
    }
  }
  `}
  </style>
);

AuthorStyle.propTypes = {
  avatarImage: PT.string.isRequired,
  dark: PT.bool.isRequired,
  color: PT.string.isRequired,
};

export default AuthorStyle;
