import { useMemo } from "react";
import { heroes } from "../data/Heroes";
import { getHeroesByPublisher } from "../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3  g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
