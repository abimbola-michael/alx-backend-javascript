namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    logInfo() {
      console.log("Java");
      this.setTeacher(cTeacher);
      console.log(this.getRequirements());
      console.log(this.getAvailableTeacher());
    }
  }
  export const java: Java = new Java();
}
