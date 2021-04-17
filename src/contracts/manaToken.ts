import { ChainId } from '@dcl/schemas'
import { abis } from '../abis'

export const manaToken = {
  [ChainId.ETHEREUM_GOERLI]: {
    version: '1',
    abi: abis.TELOToken,
    address: '0xe7fDae84ACaba2A5Ba817B6E6D8A2d415DBFEdbe',
    name: 'TELOToken',
    chainId: ChainId.ETHEREUM_GOERLI
  },
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.TELOToken,
    address: '0x882Da5967c435eA5cC6b09150d55E8304B838f45',
    name: 'Telestoworld TELO (PoS)',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.TELOToken,
    address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    name: '(PoS) Telestoworld TELO',
    chainId: ChainId.MATIC_MAINNET
  }
}
