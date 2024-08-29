import { formatNewLine } from "../commons/formatNewLine";
import data from "../data.json";

function Invitation() {
  const { greeting } = data;

  return (
    <section className="p-8 text-center">
      <h1 className="p-2">
        {greeting.host.groom.parents[0].name} ·{" "}
        {greeting.host.groom.parents[1].name}의 장남{" "}
        <span className="font-bold">{greeting.host.groom.name}</span>
      </h1>
      <h1 className="p-2">
        {greeting.host.bride.parents[0].name} ·{" "}
        {greeting.host.bride.parents[1].name}의 막내{" "}
        <span className="font-bold">{greeting.host.bride.name}</span>
      </h1>
      <div className="p-8">
        <h2>{formatNewLine(greeting.eventDetail)}</h2>
      </div>
    </section>
  );
}

export default Invitation;
