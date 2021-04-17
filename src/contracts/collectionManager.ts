import { ChainId } from '@dcl/schemas'
import { abis } from '../abis'

export const collectionManager = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.CollectionManager,
    address: '0xE2200eb4B7aC180e29fbaD3dd43346B7Bfa43bfe',
    name: 'Telestoworld Collection Manager',
    chainId: ChainId.MATIC_MUMBAI
  }
}
