import Web3 from "web3";
const networks = {
  bsc: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai testnet",
    nativeCurrency: {
      name: "Mumbai",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["rpcUrls: https://rpc-mumbai.matic.today",
    "https://matic-mumbai.chainstacklabs.com",
    "https://rpc-mumbai.maticvigil.com",
    "https://matic-testnet-archive-rpc.bwarelabs.com"
  ],
    // ["https://rpc-mumbai.maticvigil.com/",
    //          " https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
    // https://polygonscan.com/
  },
};
const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log("not found");
  }
};
const handleNetworkSwitch = async (networkName) => {
  console.log("network", networkName);
  await changeNetwork({ networkName });
};
const getAccounts = async () => {
    const web3 = window.web3;
    try {
     let accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };

  export const loadweb3 = async () => {
    try {
        let isItConnected = null;
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        await window.web3.eth.getChainId((err, netId) => {
          console.log("networkId==>", netId);
          switch (netId.toString()) {
            case "80001":
              isItConnected = true;
              break;
            default:
              handleNetworkSwitch("Matic")
              isItConnected = false;
          }
        });
        if (isItConnected == true) {
          let accounts = await getAccounts();
          return accounts[0];
        } else {
          let res = "Wrong Network";
          return res;
        }
      } else {
        let res = "No Wallet";
        return res;
      }
    } catch (error) {
      let res = "No Wallet";
      return res;
    }
  };