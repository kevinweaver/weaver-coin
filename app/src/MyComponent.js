import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "./logo.png";

export default ({ accounts }) => (
  <div className="App">
    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Weaver Coin</h1>
      <p>The Official currency of the Weaver DAO.</p>
    </div>

    <div className="section">
      <strong>Total Supply: </strong>
      <ContractData
        contract="WeaverCoin"
        method="totalSupply"
        methodArgs={[{ from: accounts[0] }]}
      />{" "}
      <ContractData contract="WeaverCoin" method="symbol" hideIndicator />
      <p>
        <strong>My Balance: </strong>
        <ContractData
          contract="WeaverCoin"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </p>
      <h3>Send Tokens</h3>
      <ContractForm
        contract="WeaverCoin"
        method="transfer"
        labels={["To Address", "Amount to Send"]}
      />
    </div>
    <div className="section">
      <h2>Leave a note</h2>
      <p>
        Write a note to be stored on-chain for your fellow Weavers.
      </p>
      <p>
        <strong>Stored Value: </strong>
        <ContractData contract="SimpleStorage" method="storedData" />
      </p>
      <ContractForm contract="SimpleStorage" method="set" />
    </div>
  </div>
);
