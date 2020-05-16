import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
  @HostBinding('class.show') expanded = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    return this.expanded = !this.expanded;
  }
}
