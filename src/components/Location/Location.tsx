import data from "../../data.json";
import Address from "./Address";
import Map from "./Map";
import MapButtons from "./MapButtons";

const Location = () => {
  const { mapInfo } = data;
  return (
    <div className="w-11/12 mx-auto flex flex-col">
      <h1 className="text-2xl font-bold text-[#e88ca6] mb-2">
        {mapInfo.address1}
      </h1>
      <p className="text-center text-gray-700 mb-4">{mapInfo.address2}</p>
      <Map />
      <MapButtons />
      <Address />
    </div>
  );
};

export default Location;
