import { HeroList } from "../components/HeroList";
export const MarvelPage = () => {
  return (
    <>
      <h1>Heroes</h1>
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
