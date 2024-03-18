import { heroes } from "../data/Heroes";

export const getHeroByNames = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
