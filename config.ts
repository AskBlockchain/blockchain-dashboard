import { http, createConfig, cookieStorage, createStorage  } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { createClient } from 'viem'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true,
  storage: createStorage({  
    storage: cookieStorage, 
  }), 
  connectors: [injected()],
  syncConnectedChain: false, 
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})