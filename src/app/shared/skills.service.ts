import { Injectable } from '@angular/core';
import { Skill } from './models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skill[] {
    return this.skills;
  }

  private readonly skills: Skill[] = [
    new Skill('C', 'Programming', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', true),
    new Skill('Java', 'Programming', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', true),
    new Skill('Spring Boot', 'Backend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', true),
    new Skill('Unit', 'Backend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg'),
    new Skill('Cucumber', 'Backend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg'),
    new Skill('Integration Testing', 'Backend', 'https://img.freepik.com/premium-vector/integration-testing-icon-vector-image-can-be-used-quality-assurance_120816-293299.jpg', true),
    new Skill('HTML', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', true),
    new Skill('CSS', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', true),
    new Skill('Angular', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', true),
    new Skill('Jasmine', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg'),
    new Skill('Karma', 'Frontend', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg'),
    new Skill('ActiveMQ', 'Messaging', 'https://tse2.mm.bing.net/th/id/OIP.IeIiVEossekYn7k1B17sYwHaHa?pid=Api&P=0&h=180', true),
    new Skill('Kafka', 'Messaging', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg'),
    new Skill('Agile', 'Methodologies', 'https://analyticstraininghub.com/wp-content/uploads/2023/01/agile-method-logo.png'),
    new Skill('Scrum', 'Methodologies', 'https://images.seeklogo.com/logo-png/42/1/scrum-logo-png_seeklogo-428358.png'),
    new Skill('Azure DevOps', 'Methodologies', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg'),
    new Skill('Git', 'Methodologies', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg', true),
    new Skill('Google Cloud Platform', 'Cloud', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', true),
    new Skill('Microsoft Azure', 'Cloud', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', true),
    new Skill('Docker', 'Cloud', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg', true),
    new Skill('Kubernetes', 'Cloud', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', true),
    new Skill('MySQL', 'Database', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', true),
    new Skill('Microsoft SQL Server', 'Database', ''),
    new Skill('Toad', 'Database', 'https://logodix.com/logo/1284847.png', true),
    new Skill('Hibernate (JPA)', 'Database', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg'),
    new Skill('JDBC', 'Database', ''),
    new Skill('Postman', 'Tool', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', true),
    new Skill('Swagger', 'Tool', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg', true),
    new Skill('Grafana', 'Tool', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg', true),
    new Skill('Dynatrace', 'Tool', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynatrace/dynatrace-original.svg', true),
    new Skill('Open Lens', 'Tool', 'https://ionica.ca/wp-content/uploads/2023/03/lens-logo.png', true)
  ];

}
