import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technologyName',
  standalone: true
})
export class TechnologyNamePipe implements PipeTransform {

  private readonly categoryMap: Record<string, string> = {
    Programming: 'Programming Languages',
    Backend: 'Backend Development',
    Frontend: 'Frontend Development',
    Database: 'Database Management',
    Messaging: 'Messaging Systems',
    Methodologies: 'Development Methodologies',
    Cloud: 'Cloud Technologies',
    Tool: 'Developer Tools'
  };

  transform(category: string): string {
    return this.categoryMap[category] ?? category;
  }

}
