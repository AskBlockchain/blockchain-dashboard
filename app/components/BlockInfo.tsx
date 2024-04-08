'use client'

import { useBlock } from 'wagmi'


export function BlockInfo() {
    const { data: blockData } = useBlock()
   
    const blockHash = blockData?.hash
    const blockWithdrawls = blockData?.withdrawals?.map(withdrawal => withdrawal) ?? []
    console.log(blockData)
    

    return (
        <div>
            <h1>Block Hash = {blockHash}</h1>
        </div>
    )
}
  