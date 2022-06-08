export const contractAddress = "0x6427f08cC3404c5175B216258506A11FE765C85a";
export const contractAbi = [{
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "_MATIC",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_plan",
        "type": "uint256"
    }],
    "name": "Investing",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "MATIC",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "STAAKEEBOOL",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_staker",
        "type": "address"
    }],
    "name": "calNoOfDays",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_staker",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_plan",
        "type": "uint256"
    }],
    "name": "calcReward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "finalDate",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "finalTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_staker",
        "type": "address"
    }],
    "name": "holdBonus",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "investers",
    "outputs": [{
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "bonusChk",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "bonusWithdrawed",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "TotalUsers",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "TotalStakedAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "maxBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "plan",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "rewardWithdrawed",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "lockBonus",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "isStaked",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "minAmount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "plansReward",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdrawInvestment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_plan",
        "type": "uint256"
    }],
    "name": "withdrawReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]