import {
  DLIGHT,
  ELECTRUM,
  GENERAL,
  IS_VERUS,
  IS_ZCASH,
  IS_PBAAS,
  IS_PBAAS_ROOT,
  ETH,
  ERC20,
} from "../constants/intervalConstants";
import { dlightServers } from 'agama-wallet-lib/src/dlight-servers';
import { ETHERS } from "../constants/web3Constants";

export const coinsList = {
  vrsc: {
    id: "VRSC",
    currency_id: '',
    system_id: 'i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV',
    display_ticker: 'VRSC',
    display_name: "Verus Coin",
    description:
      "Verus Coin includes the first proven 51% hash attack resistant proof of power algorithm. The Verus vision is PBaaS, public blockchains as a service, provisioned for conditional rewards by Verus miners and stakers.",
    fee: 10000,
    compatible_channels: [DLIGHT, ELECTRUM, GENERAL],
    tags: [IS_VERUS, IS_ZCASH, IS_PBAAS, IS_PBAAS_ROOT],
    proto: 'vrsc',
    dlightEndpoints: dlightServers.vrsc
  },
  kmd: {
    id: "KMD",
    display_name: "Komodo",
    currency_id: '.kmd',
    system_id: '',
    display_ticker: 'KMD',
    description:
      "Komodo is an open, modular, multi-chain platform that provides an autonomous, customizable blockchain to every project that builds within the ecosystem.",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc'
  },
  btc: {
    id: "BTC",
    currency_id: '.btc',
    system_id: '',
    display_ticker: 'BTC',
    display_name: "Bitcoin",
    description:
      "The coin that started it all. Bitcoin (BTC) is a peer to peer digital currency created in 2009 by Satoshi Nakamoto.",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  eth: {
    id: "ETH",
    currency_id: '',
    system_id: '.eth',
    display_ticker: 'ETH',
    display_name: "Ethereum",
    description: "Ethereum is a global, open-source platform for decentralized applications.",
    compatible_channels: [ETH, GENERAL],
    dominant_channel: ETH,
    tags: [],
    proto: 'eth',
    decimals: ETHERS
  },
  bat: {
    id: "BAT",
    currency_id: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    system_id: '.eth',
    display_ticker: 'BAT',
    display_name: "Basic Attention Token",
    description: "A decentralized, transparent digital ad exchange based on Ethereum Blockchain.",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  tst: {
    id: "TST",
    currency_id: '0x722dd3F80BAC40c951b51BdD28Dd19d435762180',
    system_id: '.eth',
    display_ticker: 'TST',
    display_name: "ERC20 Test Token",
    description: "A test token for testing the ERC20 protocol.",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  yfi: {
    id: "YFI",
    currency_id: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    system_id: '.eth',
    display_ticker: 'YFI',
    display_name: "yearn.finance",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  link: {
    id: "LINK",
    currency_id: '0x514910771af9ca656af840dff83e8264ecf986ca',
    system_id: '.eth',
    display_ticker: 'LUNK',
    display_name: "ChainLink",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  uni: {
    id: "UNI",
    currency_id: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    system_id: '.eth',
    display_ticker: 'UNI',
    display_name: "Uniswap",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  ven: {
    id: "VEN",
    currency_id: '0xd850942ef8811f2a866692a623011bde52a462c1',
    system_id: '.eth',
    display_ticker: 'VEN',
    display_name: "VeChain",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  bnt: {
    id: "BNT",
    currency_id: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    system_id: '.eth',
    display_ticker: 'BNT',
    display_name: "Bancor",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  rfox: {
    id: "RFOX",
    currency_id: '0xa1d6Df714F91DeBF4e0802A542E13067f31b8262',
    system_id: '.eth',
    display_ticker: 'RFOX',
    display_name: "RedFOX Labs",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  bal: {
    id: "BAL",
    currency_id: '0xba100000625a3754423978a60c9317c58a424e3d',
    system_id: '.eth',
    display_ticker: 'BAL',
    display_name: "Balancer",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  zrx: {
    id: "ZRX",
    currency_id: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    system_id: '.eth',
    display_ticker: 'ZRX',
    display_name: "ZRX",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  hot: {
    id: "HOT",
    currency_id: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    system_id: '.eth',
    display_ticker: 'HOT',
    display_name: "HoloToken",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  nexo: {
    id: "NEXO",
    currency_id: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    system_id: '.eth',
    display_ticker: 'NEXO',
    display_name: "Nexo",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  dai: {
    id: "DAI",
    currency_id: '0x6b175474e89094c44da98b954eedeac495271d0f',
    system_id: '.eth',
    display_ticker: 'TST',
    display_name: "Dai",
    description: "",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  oot: {
    id: "OOT",
    currency_id: '.oot',
    system_id: '.kmd',
    display_ticker: 'OOT',
    display_name: "Utrum",
    description:
      "A reward platform for crypto analysis, reviews and predictions",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc'
  },
  ccl: {
    id: "CCL",
    currency_id: '.ccl',
    system_id: '',
    display_ticker: 'CCL',
    display_name: "CoinCollect",
    description: "",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc'
  },
  doge: {
    id: "DOGE",
    currency_id: '.doge',
    system_id: '',
    display_ticker: 'CCL',
    display_name: "Dogecoin",
    description: "",
    fee: 100000000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  dgb: {
    id: "DGB",
    currency_id: '.dgb',
    system_id: '',
    display_ticker: 'DGB',
    display_name: "Digibyte",
    description: "",
    fee: 100000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  bch: {
    id: "BCH",
    currency_id: '.bch',
    system_id: '',
    display_ticker: 'BCH',
    display_name: "Bitcoin Cash",
    description: "",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  // zec: {
  //   id: "ZEC",
  //   currency_id: '',
  //   system_id: '.zec',
  //   display_ticker: 'ZEC',
  //   display_name: "ZCash",
  //   description: "",
  //   fee: 10000,
  //   compatible_channels: [DLIGHT, ELECTRUM, GENERAL],
  //   tags: [IS_ZCASH],
  //   proto: 'btc',
  //   dlightEndpoints: dlightServers.zec
  // },
  zectest: {
    id: "ZECTEST",
    currency_id: '.zectest',
    system_id: null,
    display_ticker: 'ZECTEST',
    display_name: "ZCash Testnet",
    description: "",
    fee: 10000,
    compatible_channels: [DLIGHT, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    dlightEndpoints: dlightServers.zectest
  },
  dash: {
    id: "DASH",
    currency_id: '.dash',
    system_id: '',
    display_ticker: 'DASH',
    display_name: "Dash",
    description: "",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  ltc: {
    id: "LTC",
    currency_id: '.ltc',
    system_id: '',
    display_ticker: 'LTC',
    display_name: "Litecoin",
    description: "",
    fee: 30000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc'
  },
  zilla: {
    id: "ZILLA",
    currency_id: '.zilla',
    system_id: '',
    display_ticker: 'ZILLA',
    display_name: "ChainZilla",
    description:
      "The native token of Chainzilla Blockchain Solutions. They are a blockchain consulting company that develops easy to use whitelabel blockchain wallets and applications.",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc'
  }
};