import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

import people from "./people.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Property({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <ul className="property__info">
        <il className="property__text">Деталі властивості:</il>

        <ListItem imageSrc={people}>
          <span>{guests}</span>
          <span>гості</span>
        </ListItem>

        <ListItem imageSrc={bedroom}>
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>

        <ListItem imageSrc={bath}>
          <span>{baths}</span>
          <span>вання кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
