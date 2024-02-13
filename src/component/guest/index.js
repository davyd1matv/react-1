import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function Guest({ title, children }) {
  return (
    <div className="guest__block">
      <Heading>{title}</Heading>

      <div className="guest__list">
        {children.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <div className="guest__top">
        <span className="guest__title">{guestName}</span>
        <span className="guest__info">Рейтинг: {rating}</span>
      </div>
      <span className="guest__info">{review}</span>
    </Box>
  );
}
