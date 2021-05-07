import {CityType} from "./02/02-02";
import {HouseType} from "./02/02-02";
import {addMoneyBudget} from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [{
      buildAt: 2012,
      repaired: false,
      address: {
        number: 100,
        street: {title: "White street"}
      }
    },

      {
        buildAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
        }
      },

      {
        buildAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {title: "Happy street"}
        }
      }],
    governmentBuildings: [{
      type: "HOSPITAL",
      budget: 200000,
      staffCount: 200,
      address: {
        // number может не быть, т.к. указан number?: number
        street: {title: "Central Str"}
      }
    }, {
      type: "FIRE-STATION",
      budget: 500000,
      staffCount: 1000,
      address: {
        // number может не быть, т.к. указан number?: number
        street: {title: "South Str"}
      }
    }],
    citizensNumber: 1000000,
  }
})

test.skip('Budget should be changed for HOSPITAL', () => {

  addMoneyBudget(city.governmentBuildings[0], 100000)

  expect(city.governmentBuildings[0].budget).toBe(300000)

})

test.skip('Budget should be changed for FIRE-STATION', () => {

  addMoneyBudget(city.governmentBuildings[1], -100000)

  expect(city.governmentBuildings[1].budget).toBe(400000)

})