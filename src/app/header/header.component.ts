import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isTopHeaderToggle = false;
  isManageHeaderToggle = false;
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    this.isTopHeaderToggle = false;
  }
  onTopHeaderToggle() {
    this.isTopHeaderToggle = !this.isTopHeaderToggle;
  }
  onManageHeaderToggle(){
    this.isManageHeaderToggle = !this.isManageHeaderToggle;
    console.log('onManageHeaderToggle : ',this.isManageHeaderToggle);
    
  }
}
