import data from "../../data.json";

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <div className="flex gap-2 justify-center mb-4">
      <button
        onClick={() => window.open(naverMap)}
        className="text-black border border-gray-300 py-2 px-4 rounded-lg hover:bg-green-300 hover:text-white focus:outline-none"
      >
        네이버 지도
      </button>
      <button
        onClick={() => window.open(kakaoMap)}
        className="text-black border border-gray-300 py-2 px-4 rounded-lg hover:bg-yellow-300 hover:text-white focus:outline-none"
      >
        카카오맵
      </button>
    </div>
  );
};

export default MapButtons;
