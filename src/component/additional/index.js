import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";

export default function Property({
  house_rules,
  canc_policu,
  local_transport,
  host_lang,
  special_offers,
  instructions,
}) {
  return (
    <Box shadow>
      <ul className="additional__info">
        <Heading border>Додаткові властивості:</Heading>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">Правила дому</span>
            <span>{house_rules}</span>
          </div>
        </ListItem>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">Політика скасування</span>
            <span>{canc_policu}</span>
          </div>
        </ListItem>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">Місцевий транспорт</span>
            <span>{local_transport}</span>
          </div>
        </ListItem>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">Мови хоста</span>
            <span>{host_lang}</span>
          </div>
        </ListItem>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">Спеціальні пропозиції</span>
            <span>{special_offers}</span>
          </div>
        </ListItem>

        <ListItem>
          <div className="additional__box">
            <span className="additional__text--big">
              Інструкції щодо реєстрації
            </span>
            <span>{instructions}</span>
          </div>
        </ListItem>
      </ul>
    </Box>
  );
}
