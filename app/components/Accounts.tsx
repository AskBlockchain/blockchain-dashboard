'use client'

import { 
    useAccount, 
    useDisconnect, 
    useEnsAddress, 
    useEnsName, 
    useEnsAvatar, 
    useConnect,
    useBalance } from "wagmi"
import { injected } from 'wagmi/connectors'

export const Account = () => {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const { connect } = useConnect()
    const { data: balance } = useBalance({ address })
    console.log(balance)
    

    return (
        <div>
            <div>
                <button onClick={() => connect({ connector: injected() })}>Connect</button>
            </div>
        {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
        { address && <div>{ensName ? `${ensName} (${address})` : address}</div>}    
        <div>Wallet Balance = {balance?.formatted.toString()} {balance?.symbol}</div>    
        <button onClick={() => disconnect()}>Disconnect</button>
        
        </div>
    )
}