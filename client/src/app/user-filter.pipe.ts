import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interfaces/user';

@Pipe({
  name: 'userFilter',
  standalone: true
})
export class UserFilterPipe implements PipeTransform {

  // Filters users based on their first_name and last_name
  transform(value: User[], search: string): User[] {
    return value.filter((user) => (
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
    ));
  }

}
