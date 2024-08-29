import { useState } from "react";

const phoneNumberBride = "+8201033761750"; // 신부 전화번호
const phoneNumberGroom = "+8201024592616"; // 신랑 전화번호
const messageBride = "지영아 정말 결혼 축하해!"; // 신부 보낼 메시지
const messageGroom = "중수야 정말 결혼 축하해!"; // 신랑 보낼 메시지

function Call() {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [contactType, setContactType] = useState<"bride" | "groom" | null>(
    null
  );

  const handleToggle = () => setShowContactOptions(!showContactOptions);

  const handleContactChange = (type: "bride" | "groom") => {
    setContactType(type);
    setShowContactOptions(true);
  };

  return (
    <section className="w-full max-w-[620px] mx-auto p-6">
      <div className="flex flex-col items-center">
        <button
          onClick={handleToggle}
          className={`relative w-full flex items-center justify-between py-3 px-6 mb-6 rounded-lg border border-gray-300 bg-gray-100 shadow-md transition duration-300 ease-in-out ${
            showContactOptions ? "bg-gray-200" : ""
          }`}
        >
          {showContactOptions ? (
            <span className="text-lg font-semibold text-gray-800">닫기</span>
          ) : (
            <span className="text-lg font-semibold text-gray-800">
              연락하기
            </span>
          )}
          <svg
            className={`ml-2 w-5 h-5 transition-transform ${
              showContactOptions ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showContactOptions && (
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between mb-6">
              <button
                onClick={() => handleContactChange("bride")}
                className="w-full md:w-[48%] bg-pink-500 text-white p-4 rounded-lg mb-2 md:mb-0 md:mr-2 hover:bg-pink-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                신부에게 연락하기
              </button>
              <button
                onClick={() => handleContactChange("groom")}
                className="w-full md:w-[48%] bg-teal-500 text-white p-4 rounded-lg mb-2 md:mb-0 md:ml-2 hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                신랑에게 연락하기
              </button>
            </div>

            {contactType && (
              <div className="flex flex-col space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    {contactType === "bride" ? "신부" : "신랑"} 연락하기
                  </h2>
                  <button
                    onClick={() =>
                      (window.location.href = `tel:${
                        contactType === "bride"
                          ? phoneNumberBride
                          : phoneNumberGroom
                      }`)
                    }
                    className="w-full bg-blue-500 text-white p-4 rounded-lg mb-2 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    전화하기
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `sms:${
                        contactType === "bride"
                          ? phoneNumberBride
                          : phoneNumberGroom
                      }?body=${
                        contactType === "bride" ? messageBride : messageGroom
                      }`)
                    }
                    className="w-full bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    메시지 보내기
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Call;
