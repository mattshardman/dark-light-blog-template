import moment from 'moment';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { addLinks, Image } from './utilComponents';

export const reformatIncomingPostData = ({ results }) => results.map(({ id, data }) => {
  const body = data.body.map(d => d.text);
  const jsxBody = data.body.map(d => ({ id, ...d }));

  return {
    id,
    title: data.title[0].text,
    date: data.date,
    snippet: data.snippet[0].text,
    body,
    jsxBody,
  };
});

export const bodyParser = ({
  type, id, text, spans, dimensions, url,
}) => {
  switch (type) {
    case 'heading1':
      return <h1 key={uuid()}>{text}</h1>;

    case 'heading2':
      return <h2 key={uuid()}>{text}</h2>;

    case 'heading3':
      return <h3 key={uuid()}>{text}</h3>;

    case 'heading4':
      return <h4 key={uuid()}>{text}</h4>;

    case 'heading5':
      return <h5 key={uuid()}>{text}</h5>;

    case 'heading6':
      return <h6 key={uuid()}>{text}</h6>;

    case 'paragraph':
      if (spans.length) {
        const para = addLinks(text, spans);
        return <p key={uuid()}>{para}</p>;
      }

      return <p key={uuid()}>{text}</p>;

    case 'list-item':
      if (spans.length) {
        const list = addLinks(text, spans);
        return <ul key={uuid()}><li>{list}</li></ul>;
      }

      return <ul key={uuid()}><li>{text}</li></ul>;

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
