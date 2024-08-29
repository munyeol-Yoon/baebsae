import { formatNewLine } from "../commons/formatNewLine";
import data from "../data.json";

function Greeting() {
  const { greeting } = data;

  return (
    <section className="relative p-8 bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] shadow-lg rounded-lg max-w-2xl mx-auto">
      <p className="text-center text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] font-light leading-relaxed text-[#333] font-serif tracking-wide">
        {formatNewLine(greeting.message)}
      </p>
    </section>
  );
}

export default Greeting;
