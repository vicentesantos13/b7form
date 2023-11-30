import { FormArea } from "./FormArea";
import { HeroTexts } from "./HeroTexts";

export const HeroArea = () => {
  return (
    <div className=" bg-black14 ">
      <div className="flex flex-col md:flex-row md:justify-between px-3 xl:px-0 xl:max-w-7xl m-auto py-8 xl:py-24">
        <HeroTexts />
        <FormArea />
      </div>
    </div>
  );
};
