import Copy from "../common/SVG/Copy";

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
}

const AccountWrap = ({ name, relation, bank, account }: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert("계좌번호가 복사되었습니다.😉😉");
      },
      () => {
        alert("계좌번호 복사에 실패했습니다.🥲🥲");
      }
    );
  };

  return (
    <div className="p-2 border-b border-gray-300 last:border-b-0">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-800">{relation}</span>
        <span className="text-base">{name}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div>
          {bank} {account}
        </div>
        <button
          onClick={handleCopy}
          className="p-1 bg-white border-none rounded-md shadow-none outline-none cursor-pointer"
        >
          <Copy fill="#dfdfdf" />
        </button>
      </div>
    </div>
  );
};

export default AccountWrap;
