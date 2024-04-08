'use client'

import { useBlock } from 'wagmi'


export function BlockInfo() {
    const { data: blockData, isLoading, isError } = useBlock()
   
    const blockHash = blockData?.hash
    const blockWithdrawlAddress = blockData?.withdrawals?.map(withdrawal => withdrawal.address) ?? []
    const blockWithdrawlAmounts = blockData?.withdrawals?.map(withdrawal => withdrawal.amount) ?? []

    console.log(blockWithdrawlAddress, blockWithdrawlAmounts)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching block</div>;
        

    return (
        <div>
            <h1>Block Hash = {blockHash}</h1>
            <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {blockWithdrawlAddress.map((address, index) => (
          <tr key={index}>
            <td>{address}</td>
            
            <td>{BigInt(blockWithdrawlAmounts[index]).toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
            
        </div>
    )
}
  