export type StreetType = {
  title: string
}

export type AddressType = {
  number?: number
  street: StreetType
}

export type HouseType = {
  id?: number
  buildAt: number
  repaired: boolean
  address: AddressType

}

export type governmentBuildingType = {
  type: "HOSPITAL" | "FIRE STATION"
  budget: number
  staffCount: number
  address: StreetType
}


export type CityType = {
  title: string
  houses: Array<HouseType>,
  governmentBuildings: Array<string>
  citizensNumber: number
}

export type GovernmentBuildingsType = {}