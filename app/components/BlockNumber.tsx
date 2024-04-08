'use client'


import { truncate, watch } from 'fs'
import { useBlockNumber } from 'wagmi'

export const BlockNumber = () => {
    const { data: blockData } = useBlockNumber({
        watch: true
    })

    const blockNumber = blockData?.toString()

    console.log(blockNumber)

    return (
        <div><h1>The Current Block Number is {blockNumber}</h1></div>
    )
}

