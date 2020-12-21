export class CreateEducationDto {
  institution: string;
  area: string;
  studyType: string;
  startDate: Date;
  endDate: Date;
  gpa: number;
  courses: string[];
}
