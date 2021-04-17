import { ChainId } from '@dcl/schemas'
import { abis } from '../abis'

export const rarities = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.Rarities,
    address: '0xeF2d490521801CbC005FcB2f4ce0478FEEd95c89',
    name: 'Telestoworld Rarities',
    chainId: ChainId.MATIC_MUMBAI
  }
}
