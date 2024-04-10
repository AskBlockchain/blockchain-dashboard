'use client'

import { useBlock,  type UseBlockParameters } from 'wagmi'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const BlockInfo = () => {
    const { data: blockData, isLoading, isError } = useBlock({
        watch: true, 
    })
    const withdrawals = blockData?.withdrawals ?? [];
    const blockWithdrawals = withdrawals.map(({ validatorIndex, address, amount }) => ({ validatorIndex, address, amount }))

    console.log(blockWithdrawals, blockData)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching block</div>;     
    return (
        <Table>
  <TableCaption>A list of Validator Withdrawals from the Beacon Chain</TableCaption>
  <TableHeader>
    <TableRow>      
      <TableHead>Validator Index</TableHead>
      <TableHead>Address</TableHead>     
      <TableHead className="text-right">Amount Withdrawn (ETH)</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {blockWithdrawals.map((blockWithdrawals, validatorIndex) => (
           <TableRow className="font-medium" key={validatorIndex}>
            <TableCell>{blockWithdrawals.validatorIndex}</TableCell>
            <TableCell>{blockWithdrawals.address}</TableCell>  
            <TableCell className="text-right">{blockWithdrawals.amount}</TableCell> 
            </TableRow>
        ))}    
  </TableBody>
</Table>

 
    )
}
  