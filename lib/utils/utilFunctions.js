import moment from 'moment';

export const bodyParser = (element) => {
  if (element.type === 'heading1') {
    return <h1 key={`${element.id}${Math.random()}`}>{element.text}</h1>;
  }

  if (element.type === 'heading2') {
    return <h2 key={`${element.id}${Math.random()}`}>{element.text}</h2>;
  }

  if (element.type === 'heading3') {
    return <h3 key={`${element.id}${Math.random()}`}>{element.text}</h3>;
  }

  if (element.type === 'heading4') {
    return <h4 key={`${element.id}${Math.random()}`}>{element.text}</h4>;
  }

  if (element.type === 'heading5') {
    return <h5 key={`${element.id}${Math.random()}`}>{element.text}</h5>;
  }

  if (element.type === 'heading6') {
    return <h6 key={`${element.id}${Math.random()}`}>{element.text}</h6>;
  }

  if (element.type === 'paragraph') {
    return <p key={`${element.id}${Math.random()}`}>{element.text}</p>;
  }

  if (element.type === 'list-item') {
    return <ul key={`${element.id}${Math.random()}`}><li>{element.text}</li></ul>;
  }

  if (element.type === 'image') {
    const { width } = element.dimensions;
    return (
      <div key={element.id}>
        <img
          src={element.url}
          style={{
            width,
            maxWidth: '100%',
          }}
          alt=""
        />
      </div>
    );
  }

  return null;
};

export const getTimeToRead = body => Math.round(body.toString().split(' ').length / 200);

export const getTimeSincePost = time => moment(new Date(time)).startOf('day').fromNow();
