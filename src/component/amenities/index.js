import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

import pool from "./pool.svg";
import gym from "./gym.svg";
import coffe from "./coffe.svg";
import wifi from "./wifi.svg";
import car from "./car.svg";
import pet from "./pet.svg";
import airpot from "./airpot.svg";
import sec from "./sec.svg";
import meetroom from "./meetroom.svg";
import child from "./child.svg";

export default function Property({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow>
      <ul className="amenities__info">
        <il className="amenities__text">Зручності:</il>

        <ListItem imageSrc={pool}>
          {hasPool ? (
            <span className="amenities__true">Басейн</span>
          ) : (
            <span>Басейн</span>
          )}
        </ListItem>

        <ListItem imageSrc={gym}>
          {hasGym ? (
            <span className="amenities__true">Спортивний зал</span>
          ) : (
            <span>Спортивний зал</span>
          )}
        </ListItem>

        <ListItem imageSrc={coffe}>
          {hasFreeBreakfast ? (
            <span className="amenities__true">Безкоштовний сніданок</span>
          ) : (
            <span>Безкоштовний сніданок</span>
          )}
        </ListItem>

        <ListItem imageSrc={wifi}>
          {hasFreeWiFi ? (
            <span className="amenities__true">Безкоштовний Wi-Fi</span>
          ) : (
            <span>Безкоштовний Wi-Fi</span>
          )}
        </ListItem>

        <ListItem imageSrc={car}>
          {hasParking ? (
            <span className="amenities__true">
              Безкоштовний вуличний паркінг
            </span>
          ) : (
            <span>Безкоштовний вуличний паркінг</span>
          )}
        </ListItem>

        <ListItem imageSrc={pet}>
          {hasPetsAllowed ? (
            <span className="amenities__true">
              Дозволено розмішення з тваринами
            </span>
          ) : (
            <span>Дозволено розмішення з тваринами</span>
          )}
        </ListItem>

        <ListItem imageSrc={airpot}>
          {hasAirportShuttle ? (
            <span className="amenities__true">Трансфер до/з аеропорту</span>
          ) : (
            <span>Трансфер до/з аеропорту</span>
          )}
        </ListItem>

        <ListItem imageSrc={sec}>
          {hasConciergeService ? (
            <span className="amenities__true">Консьєрж-сервіс</span>
          ) : (
            <span>Консьєрж-сервіс</span>
          )}
        </ListItem>

        <ListItem imageSrc={meetroom}>
          {hasRoomService ? (
            <span className="amenities__true">Обслуговування номерів</span>
          ) : (
            <span>Обслуговування номерів</span>
          )}
        </ListItem>

        <ListItem imageSrc={child}>
          {hasChildFriendly ? (
            <span className="amenities__true">Підходитьдля дітей</span>
          ) : (
            <span>Підходитьдля дітей</span>
          )}
        </ListItem>
      </ul>
    </Box>
  );
}
