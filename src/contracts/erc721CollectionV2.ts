import { ChainId } from '@dcl/schemas'
import { abis } from '../abis'

export const erc721CollectionV2 = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Telestoworld Collection',
    chainId: ChainId.MATIC_MUMBAI
  }
}
