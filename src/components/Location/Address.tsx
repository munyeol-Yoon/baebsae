import data from "../../data.json";

function Address() {
  const { locationInfo } = data;

  return (
    <div className="flex flex-col items-start my-5 space-y-5">
      {locationInfo?.map((item) => {
        const { title, desc } = item;
        return (
          <div key={title} className="flex flex-col text-left">
            <p className="text-xl font-semibold text-[#e88ca6] whitespace-pre-line">
              {title}
            </p>
            <p className="mt-1 text-gray-700 font-light whitespace-pre-line">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Address;
