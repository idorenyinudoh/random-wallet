export interface ActionLinkInterface {
  url: string
  icon: string
  action: string
  size: string
  isButton?: boolean
}

export interface NavLinkInterface {
  url: string
  icon: string
}

export interface CurrencyInterface {
  url: string
  icon: string
  name: string
  priceInUSD: number
  ownership: number
  symbol: string
  ownershipUSDValue: number
}

export interface BaseNavLinkInterface {
  title: string
  description?: string
  icon: string
  iconBackground: string
  url: string
}