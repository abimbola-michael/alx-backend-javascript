namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    logInfo() {
      console.log("React");
      this.setTeacher(cTeacher);
      console.log(this.getRequirements());
      console.log(this.getAvailableTeacher());
    }
  }
  export const react: React = new React();
}
