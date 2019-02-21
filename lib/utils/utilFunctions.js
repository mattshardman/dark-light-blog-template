import moment from 'moment';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

const ReturnLink = ({ writing, link, data }) => (
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

const addLinks = (text, spans) => {
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

const Image = ({ id, url, dimensions }) => (
  <div
    key={`${id}${Math.random()}`}
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

export const bodyParser = ({
  type, id, text, spans, dimensions, url,
}) => {
  switch (type) {
    case 'heading1':
      return <h1 key={`${id}${Math.random()}`}>{text}</h1>;
    case 'heading2':
      return <h2 key={`${id}${Math.random()}`}>{text}</h2>;
    case 'heading3':
      return <h3 key={`${id}${Math.random()}`}>{text}</h3>;
    case 'heading4':
      return <h4 key={`${id}${Math.random()}`}>{text}</h4>;
    case 'heading5':
      return <h5 key={`${id}${Math.random()}`}>{text}</h5>;
    case 'heading6':
      return <h6 key={`${id}${Math.random()}`}>{text}</h6>;
    case 'paragraph':
      if (spans.length) {
        const para = addLinks(text, spans);
        return <p key={`${id}${Math.random()}`}>{para}</p>;
      }
      return <p key={`${id}${Math.random()}`}>{text}</p>;
    case 'list-item':
      if (spans.length) {
        const list = addLinks(text, spans);
        return <ul key={`${id}${Math.random()}`}><li>{list}</li></ul>;
      }
      return <ul key={`${id}${Math.random()}`}><li>{text}</li></ul>;
    case 'image':
      return (
        <Image
          id={id}
          url={url}
          dimensions={dimensions}
        />
      );

    default:
      return null;
  }
};

export const getTimeToRead = body => Math.round(body.toString().split(' ').length / 200);

export const getTimeSincePost = time => moment(new Date(time)).startOf('day').fromNow();

bodyParser.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  spans: PropTypes.arrayOf(PropTypes.object).isRequired,
  dimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

Image.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
