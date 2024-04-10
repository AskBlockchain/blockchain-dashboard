'use client'

import { formatEther } from "viem"
import { 
    useAccount, 
    useDisconnect,      
    useEnsName, 
    useEnsAvatar, 
    useConnect,
    useBalance,
    } from "wagmi"
import { injected } from 'wagmi/connectors'
import { Button } from "@/components/ui/button"


export const Account = () => {
    const { address, chain } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const { connect } = useConnect()
    const { data: balance, isFetched: balanceFetched } = useBalance({ address: address, chainId: chain?.id })    
    
    console.log(address, chain)

    return (
        <div>
            <div>                
                <Button onClick={() => connect({ connector: injected() })}>Connect</Button>
                <Button onClick={() => disconnect()}>Disconnect</Button>
            </div>
           
        {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
        {address && <div>Connected Wallet= {ensName ? `${ensName} (${address})` : address}</div>} 
        {balanceFetched && <div>Balance = {formatEther(balance?.value as bigint)} {chain?.nativeCurrency.name}</div>} 

        
        </div>
    )
}