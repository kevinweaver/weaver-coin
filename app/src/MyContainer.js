import Dashboard from "./Dashboard";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    WeaverCoin: state.contracts.WeaverCoin,
    drizzleStatus: state.drizzleStatus,
  };
};

const MyContainer = drizzleConnect(Dashboard, mapStateToProps);

export default MyContainer;
