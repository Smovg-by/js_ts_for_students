import {StudentType} from "../02-Test objects/02";
import {governmentBuildingType} from "../02-Test objects/02-02";

export const sum = (a: number, b: number) => {
  return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(student: StudentType) {
  student.isActive = true;
}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
  return student.address.city.title === cityName;
}

export function addMoneyBudget(building: governmentBuildingType, budget: number) {
  building.budget += budget
}