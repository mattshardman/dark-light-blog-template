import React from "react";
import moment from "moment";
import { RichText } from "prismic-reactjs";
import ProgressiveImage from "react-progressive-image";

import { theme } from "../theme";

const { Elements } = RichText;

export const reformatIncomingPostData = ({ results }) =>
  results.map(({ id, data }) => {
    const body = data.body.map(d => d.text);

    return {
      id,
      title: data.title[0].text,
      date: data.date,
      snippet: data.snippet[0].text,
      body,
      orgTitle: data.title,
      orgDate: data.date,
      orgSnippet: data.snippet,
      orgBody: data.body
    };
  });

const propsWithUniqueKey = (props, key) => ({ ...(props || {}), key });

// -- HTML Serializer
export const htmlSerializer = (type, element, content, children, key) => {
  let props = {};

  switch (type) {
    case Elements.heading1: // Heading 1
      return React.createElement(
        "h1",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading2: // Heading 2
      return React.createElement(
        "h2",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading3: // Heading 3
      return React.createElement(
        "h3",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading4: // Heading 4
      return React.createElement(
        "h4",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading5: // Heading 5
      return React.createElement(
        "h5",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.heading6: // Heading 6
      return React.createElement(
        "h6",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.paragraph: // Paragraph
      return React.createElement("p", propsWithUniqueKey(props, key), children);

    case Elements.preformatted: // Preformatted
      return React.createElement(
        "pre",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.strong: // Strong
      return React.createElement(
        "strong",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.em: // Emphasis
      return React.createElement(
        "em",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.listItem: // Unordered List Item
      return React.createElement(
        "li",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.oListItem: // Ordered List Item
      return React.createElement(
        "li",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.list: // Unordered List
      return React.createElement(
        "ul",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.oList: // Ordered List
      return React.createElement(
        "ol",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.image: // Image
      return (
        <div
          key={key}
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ProgressiveImage src={element.url} placeholder="">
            {(src, loading) =>
              loading ? (
                <div
                  style={{
                    width: element.dimensions.width,
                    height: element.dimensions.height,
                    maxWidth: "100%",
                    background: "rgba(0,0,0,0.2)"
                  }}
                />
              ) : (
                <img
                  src={src}
                  alt={element.alt || ""}
                  style={{ maxWidth: "100%" }}
                />
              )
            }
          </ProgressiveImage>
        </div>
      );

    case Elements.embed: // Embed
      props = Object.assign(
        {
          "data-oembed": element.oembed.embed_url,
          "data-oembed-type": element.oembed.type,
          "data-oembed-provider": element.oembed.provider_name
        },
        element.label ? { className: element.label } : {}
      );
      const embedHtml = React.createElement("div", {
        dangerouslySetInnerHTML: { __html: element.oembed.html }
      }); //eslint-disable-line
      return React.createElement(
        "div",
        propsWithUniqueKey(props, key),
        embedHtml
      );

    case Elements.hyperlink: // Image
      return (
        <a
          key={key}
          href={element.data.url}
          style={{ color: theme.altColors[1] }}
          target="_black"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );

    case Elements.label: // Label
      props = element.data
        ? Object.assign({}, { className: element.data.label })
        : {};
      return React.createElement(
        "span",
        propsWithUniqueKey(props, key),
        children
      );

    case Elements.span: // Span
      if (content) {
        return content.split("\n").reduce((acc, p) => {
          if (acc.length === 0) {
            if (p[0] === '"') {
              console.log(p);
              return [
                <div
                  style={{
                    padding: "30px 40px",
                    lineHeight: 1.75,
                    fontWeight: 300
                  }}
                >
                  {p.slice(1, p.length - 1)}
                </div>
              ];
            }
            return [<span style={{ lineHeight: 1.75, fontSize: 18 }}>{p}</span>];
          }

          const brIndex = (acc.length + 1) / 2 - 1;
          const br = React.createElement("br", propsWithUniqueKey({}, brIndex));
          return acc.concat([br, p]);
        }, [])
      }
      return null;

    default:
      return null;
  }
};

export const getTimeToRead = body =>
  Math.round(body.toString().split(" ").length / 200);

export const getTimeSincePost = time =>
  moment(new Date(time))
    .startOf("day")
    .fromNow();
