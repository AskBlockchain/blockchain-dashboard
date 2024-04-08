import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, polygon } from 'wagmi/chains'
import { createClient } from 'viem'
import { injected } from 'wagmi/connectors'


declare module 'wagmi' { 
    interface Register { 
      config: typeof config 
    } 
  } 

export const config = createConfig({
  chains: [mainnet, sepolia, polygon],
  ssr: true,
  storage: createStorage({  
    storage: cookieStorage, 
  }), 
  connectors: [injected()],
  syncConnectedChain: false, 
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
  },
})