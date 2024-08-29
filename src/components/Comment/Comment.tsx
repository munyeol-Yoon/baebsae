import { useEffect, useState } from "react";
import { fetchEntries, insertGuestBook } from "../../api/guestBook";

type GuestBookEntry = {
  id: number;
  name: string;
  content: string;
  created_at: string;
};

function Comment() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEntries();
        setEntries(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await insertGuestBook({ name, password, content });

    setName("");
    setPassword("");
    setContent("");
    const data = await fetchEntries();
    setEntries(data);
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-[#e88ca6]">
        방명록
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            내용
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          제출
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <div className="text-lg font-semibold text-gray-900">
              {entry.name}
            </div>
            <div className="mt-2 text-gray-800">{entry.content}</div>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(entry.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comment;
