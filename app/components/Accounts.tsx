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

export const Account = () => {
    const { address, chain } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const { connect } = useConnect()
    const { data: balance, isFetched: balanceFetched } = useBalance({ address: address, chainId: chain?.id })    
    console.log(balance)
    console.log(chain)

    return (
        <div>
            <div>
                <button onClick={() => connect({ connector: injected() })}>Connect</button>
            </div>
        {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>} 
        {balanceFetched && <div>Balance = {formatEther(balance?.value as bigint)} {balance?.symbol}</div>}          
        <button onClick={() => disconnect()}>Disconnect</button>
        
        </div>
    )
}