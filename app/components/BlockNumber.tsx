'use client'

import { dataTagSymbol } from '@tanstack/react-query'
import { mainnet } from 'viem/chains'
import { useBlockNumber } from 'wagmi'

export const BlockNumber = () => {
    const { data: blockData } = useBlockNumber({
        watch: true,        
    })

    const blockNumber = blockData?.toString()
    
    console.log(blockNumber)

    return (
        <div>
            <h1>Current Block Number = {blockNumber}</h1>            
        </div>
    )
}

