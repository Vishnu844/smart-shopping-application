const { default: ReduxProvider } = require("@/provider");

async function ReduxWrapper({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

export default ReduxWrapper;
