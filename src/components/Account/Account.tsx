import data from "../../data.json";
import Accordion from "../common/Accordion";
import AccountWrap from "./AccountWrap";

const Account = () => {
  const { hostInfo } = data;
  return (
    <>
      <h1 className="w-11/12 py-5 mx-auto text-center text-[#e88ca6] font-bold">
        마음 전할 곳
      </h1>
      <div className="w-11/12 py-5 mx-auto">
        {hostInfo.map((host) => (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => (
              <AccountWrap
                key={account.name}
                name={account.name}
                relation={account.relation}
                bank={account.bank}
                account={account.account}
              />
            ))}
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Account;
