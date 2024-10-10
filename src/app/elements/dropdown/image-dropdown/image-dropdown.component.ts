import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-dropdown',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './image-dropdown.component.html',
  styleUrl: './image-dropdown.component.css'
})
export class ImageDropdownComponent {
  @Input() dropdown: any | undefined;
  getValue: any = '';
  selectIgm: string = '';
  selectValue: string = '';
  select_style?: string = '';
  ngOnInit() {
    this.select_style = this.dropdown.select_style;
    this.getValue = this.dropdown.value_img;
    this.selectValue = this.getValue[(this.dropdown.select)-1].value;
    this.selectIgm = this.getValue[(this.dropdown.select)-1].img;
  }
  getValueDrop(val: any, img: any) {
    this.selectValue = val;
    this.selectIgm = img;
  }
}
