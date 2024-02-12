import "./index.css";

import house from "./house.png";

export default function Photo() {
  return <img className="photo" src={house} name="House" />;
}

// У випадку, коли фото береться з інтернету:
// export default function Photo({ src, name }) {
//   return <img className="photo" src={src} alt={name} />;
// }
