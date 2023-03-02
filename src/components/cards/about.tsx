import * as React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutBox = (): JSX.Element => {
  return (
    <>
      <section className="m-2 flex w-fit flex-auto flex-col justify-start rounded-2xl bg-sideColors-1 py-4 font-monty tracking-tighter sm:text-2xl md:text-4xl lg:text-8xl">
        <section className="px-8 font-bold text-white">What's</section>
        <section className="px-8 font-bold text-white">this</section>
        <section className="px-8 font-bold text-white">about</section>
        <section className="flex justify-end">
          <BsArrowRight className="-translate-x-4 text-slate-300 hover:translate-x-0 hover:text-white sm:text-2xl md:text-3xl lg:text-4xl" />
        </section>
      </section>
    </>
  );
};

export default AboutBox;
