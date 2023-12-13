import Image from "next/image";
import { FormArea } from "./FormArea";

export const HeroArea = () => {
  return (
    <div className=" bg-black14 ">
      <div className="flex flex-col md:flex-row md:justify-between px-3 xl:px-0 xl:max-w-7xl m-auto py-8 xl:py-24">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex">
            <Image
              src="/assets/attendant.png"
              alt="Icone de atendimento"
              width={24}
              height={24}
            />
            <div className="ml-3 text-white text-xl">Fale conosco.</div>
          </div>
          <h1 className="text-white font-poppins text-5xl md:text-6xl mt-6 text-center md:text-start md:max-w-md">
            Envie a sua mensagem{" "}
            <span className="hidden md:flex mt-2">para nós!</span>
          </h1>
          <h2 className="text-gray7F text-xl text-center mt-10 md:text-start md:w-8/12">
            Preencha os campos e entre em contato conosco.
          </h2>
        </div>
        <FormArea />
      </div>
    </div>
  );
};
