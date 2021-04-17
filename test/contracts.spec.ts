import { ChainId } from '@dcl/schemas'
import { expect } from 'chai'
import { abis } from '../src/abis'
import { getContract, getContractName } from '../src/contracts'
import { ContractName } from '../src/types'

describe('#getContract', () => {
  it('should throw if the contract name is not supported', () => {
    const contractName = 'Nonsense' as any
    expect(() => getContract(contractName, ChainId.ETHEREUM_MAINNET)).to.throw(
      `Could not get a valid contract for name: ${contractName}`
    )
  })

  describe('MANAToken', () => {
    const abi = abis.MANAToken

    it('should return the configuration for Goerli', () => {
      expect(
        getContract(ContractName.MANAToken, ChainId.ETHEREUM_GOERLI)
      ).to.deep.eq({
        abi,
        address: '0xe7fDae84ACaba2A5Ba817B6E6D8A2d415DBFEdbe',
        name: 'MANAToken',
        version: '1',
        chainId: ChainId.ETHEREUM_GOERLI
      })
    })

    it('should return the configuration for Mumbai', () => {
      expect(
        getContract(ContractName.MANAToken, ChainId.MATIC_MUMBAI)
      ).to.deep.eq({
        abi,
        address: '0x882Da5967c435eA5cC6b09150d55E8304B838f45',
        name: 'Decentraland MANA (PoS)',
        version: '1',
        chainId: ChainId.MATIC_MUMBAI
      })
    })

    it('should return the configuration for Matic Mainnet', () => {
      expect(
        getContract(ContractName.MANAToken, ChainId.MATIC_MAINNET)
      ).to.deep.eq({
        abi,
        address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
        name: '(PoS) Decentraland MANA',
        version: '1',
        chainId: ChainId.MATIC_MAINNET
      })
    })

    it('should throw if the chain is not supported', () => {
      expect(() =>
        getContract(ContractName.MANAToken, ChainId.ETHEREUM_ROPSTEN)
      ).to.throw(
        `Could not get a valid contract for ${ContractName.MANAToken} using chain ${ChainId.ETHEREUM_ROPSTEN}`
      )
    })
  })
})

describe('#getContractName', () => {
  it('should return the contract name by address', () => {
    const address = '0x882Da5967c435eA5cC6b09150d55E8304B838f45'
    expect(getContractName(address)).to.eq(ContractName.MANAToken)
  })

  it('should support addresses from multiple chains', () => {
    const addressMumbai = '0xa274eC4366703d31bF58F5053b708335FaAC2b52'
    const addressMainnet = '0x8e5660b4ab70168b5a6feea0e0315cb49c8cd539'

    expect(getContractName(addressMumbai)).to.eq(ContractName.Marketplace)
    expect(getContractName(addressMainnet)).to.eq(ContractName.Marketplace)
  })

  it('should support all cases', () => {
    const lowerCaseAddress = '0xe11663feb948892f2d2d966bfcb40ba2f5c02bb5'
    const upperCaseAddress = '0XE11663FEB948892F2D2D966BFCB40BA2F5C02BB5'
    const mixedCaseAddress = '0XE11663feb948892f2d2d966bfcb40BA2F5C02BB5'

    expect(getContractName(lowerCaseAddress)).to.eq(ContractName.Forwarder)
    expect(getContractName(upperCaseAddress)).to.eq(ContractName.Forwarder)
    expect(getContractName(mixedCaseAddress)).to.eq(ContractName.Forwarder)
  })

  it('should throw if the address does not correspond to a contract', () => {
    const address = '0xc0ffee254729296a45a3885639AC7E10F9d54979'
    expect(() => getContractName(address)).to.throw(
      `Could not get a valid contract name for address ${address}`
    )
  })
})
