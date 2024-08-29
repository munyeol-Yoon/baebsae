import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";
import data from "../../data.json";

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();

  return (
    <MapDiv className="w-full h-72 mb-4">
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={17}
        draggable={false}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}
      >
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
