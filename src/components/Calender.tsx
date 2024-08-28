const generateOctoberDays = () => {
  const daysInMonth = new Date(2024, 10, 0).getDate(); // Get days in October 2024
  const firstDayOfWeek = new Date(2024, 9, 1).getDay(); // Get the weekday of October 1st (0 = Sunday)

  const daysArray = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }
  return daysArray;
};

function Calendar() {
  const octoberDays = generateOctoberDays();
  const weddingDay = 26;

  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-xl md:text-2xl font-serif text-center mb-4 text-[#FFD700]">
        October 2024
      </h2>
      <div className="grid grid-cols-7 gap-2 text-center text-xs md:text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-gray-600 font-semibold">
            {day}
          </div>
        ))}
        {octoberDays.map((day, index) =>
          day ? (
            <div
              key={index}
              className={`flex items-center justify-center p-2 md:p-4 rounded-full ${
                day === weddingDay
                  ? "bg-yellow-200 text-white font-bold"
                  : "bg-gray-50 text-gray-800"
              } transition duration-300 ease-in-out`}
              style={{ aspectRatio: "1" }} // Ensuring square aspect ratio
            >
              {day}
            </div>
          ) : (
            <div key={index} className="p-4" />
          )
        )}
      </div>
    </section>
  );
}

export default Calendar;
