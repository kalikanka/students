export class Grade {
  subject: string;
  grade: number;
  weight: number;

  constructor(givenSubject: string, givenGrade: number, givenWeight: number) {
    this.subject = givenSubject;
    this.grade = givenGrade;
    this.weight = givenWeight;
  }
}
