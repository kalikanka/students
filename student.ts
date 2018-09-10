import {Grade} from './grade.model';

export class Student {
  id: number;
  name: string;
  surname: string;
  indexNumber: string;
  grades: Grade[];

  constructor(givenIndexNumber: string, givenName: string, givenSurname: string) {
    this.name = givenName;
    this.indexNumber = givenIndexNumber;
    this.surname = givenSurname;
    this.grades = [new Grade('Digital Systems', 5, 4),
      new Grade('Physics', 3, 2)];
  }

  addGrade(subject: HTMLInputElement, grade: HTMLInputElement, weight: HTMLInputElement): boolean {
    this.grades.push(new Grade(subject.value, parseFloat(grade.value), parseFloat(weight.value)));
    subject.value = '';
    grade.value = '';
    weight.value = '';
    return false;
  }

  deleteGrade(key: number): boolean {
    const index = this.grades.indexOf(this.grades[key], 0);
    if (index > -1) {
      this.grades.splice(index, 1);
    }
    return false;
  }

  calculateAverage(): number {
    let sumOfAddedGrades  = 0;
    let sumOfAddedWeights = 0;
    for (const grade of this.grades) {
      sumOfAddedGrades += grade.grade * grade.weight;
      sumOfAddedWeights += grade.weight;
    }
    const average = sumOfAddedGrades / sumOfAddedWeights;
    return parseFloat(average.toFixed(2));
  }
}
