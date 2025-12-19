import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/models/Skill';
import { SkillsService } from '../shared/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  showListView = false;
  skills: Skill[] = [];
  groupedSkills: { [technology: string]: Skill[] } = {};

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
    this.groupedSkills = this.skills.reduce((groups, skill) => {
      const key = skill.technology;
      if(!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(skill);
      return groups;
    }, {} as { [technology: string]: any[] });
  }

  toggleView() {
    this.showListView = !this.showListView;
  }

  get visibleSkills(): Skill[] {
    return this.skills
      .filter(skill => skill.display)
      .sort(() => Math.random() - 0.5);
  }
}
