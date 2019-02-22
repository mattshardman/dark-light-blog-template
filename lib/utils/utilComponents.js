import ProgressiveImage from 'react-progressive-image';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export const ReturnLink = ({ writing, link, data }) => (
  <>
    {writing}
    <a
      style={{ color: '#ff0078' }}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  </>
);

export const addLinks = (text, spans) => {
  const list = spans.map((span, index) => {
    const { start, end, data } = span;

    if (!index) {
      const writing = text.slice(0, start);
      const link = text.slice(start, end);

      return (
        <ReturnLink
          writing={writing}
          link={link}
          data={data}
        />
      );
    }

    const writing = text.slice(spans[index - 1].end, start);
    const link = text.slice(start, end);

    return (
      <ReturnLink
        writing={writing}
        link={link}
        data={data}
      />
    );
  });

  const last = text.slice(spans[spans.length - 1].end, text.length);
  return <>{list}{last}</>;
};

export const Image = ({ url, dimensions }) => (
  <div
    key={uuid}
    className="img-wrapper"
  >
    <ProgressiveImage src={url} placeholder="">
      {(src, loading) => (loading ? (
        <div className="place-holder" />
      ) : (
        <img
          src={src}
          alt="me"
          className="img"
          width="100%"
        />
      ))}
    </ProgressiveImage>

    <style jsx>{`
        .img-wrapper {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
  
        .place-holder {
          box-sizing: border-box;
          width: ${dimensions.width};
          height: ${dimensions.height};
          max-width: 100%;
          background: rgba(0,0,0,0.2);
        }
  
        .img {
          box-sizing: border-box;
          width: ${dimensions.width}px;
          max-height: 100%;
          max-width: 100%;
        }
      `}
    </style>
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

ReturnLink.propTypes = {
  writing: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
};
