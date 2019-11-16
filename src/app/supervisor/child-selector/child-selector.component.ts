import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'app-child-selector',
  templateUrl: './child-selector.component.html',
  styleUrls: ['./child-selector.component.scss'],
})
export class ChildSelectorComponent {
  @Output()
  private selected: EventEmitter<string> = new EventEmitter<string>();

  private currentChild: string = null;

  private readonly children: { name: string, image: string }[] = [
    {
      name: 'Adrienne Ponce',
      image: '/assets/img/children/adrienne.jpg'
    },
    {
      name: 'Aaron Kunz',
      image: '/assets/img/children/aaron.jpg'
    },
    {
      name: 'Anna Leuenberger',
      image: '/assets/img/children/anna.jpg'
    },
    {
      name: 'Bettina Rettenmeyer',
      image: '/assets/img/children/bettina.jpg'
    },
    {
      name: 'Bryan Schwager',
      image: '/assets/img/children/bryan.jpg'
    },
    {
      name: 'Christine Messerli',
      image: '/assets/img/children/christine.jpg'
    },
    {
      name: 'Colin Hess',
      image: '/assets/img/children/colin.jpg'
    },
    {
      name: 'Dana Weiss',
      image: '/assets/img/children/dana.jpg'
    },
    {
      name: 'Dario Arn',
      image: '/assets/img/children/dario.jpg'
    },
    {
      name: 'Emilia Ali',
      image: '/assets/img/children/emilia.jpg'
    },
    {
      name: 'Enzo Berger',
      image: '/assets/img/children/enzo.jpg'
    },
    {
      name: 'Fabian Küng',
      image: '/assets/img/children/fabian.jpg'
    },
    {
      name: 'Joel Rudolph',
      image: '/assets/img/children/joel.jpg'
    },
    {
      name: 'Jana Schär',
      image: '/assets/img/children/jana.jpg'
    },
    {
      name: 'Martin Schneider',
      image: '/assets/img/children/martin.jpg'
    },
    {
      name: 'Naomi Müller',
      image: '/assets/img/children/naomi.jpg'
    }
  ];

  selectChild(name: string) {
    if (this.currentChild) {
      name = null;
    }
    this.currentChild = name;
    this.selected.emit(name);
  }

  @HostBinding('class.has-selected')
  get isSelected(): boolean {
    return !!this.currentChild;
  }
}
