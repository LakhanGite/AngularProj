import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen: boolean = false;
  
  @HostBinding('class.open') get showDropdownList(){
    return this.isOpen;
  }

  @HostListener('mouseenter') isDropdownOpen(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') isDropdownClose(){
    this.isOpen = false;
  }
}
