import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-commentaire-c',
  templateUrl: './commentaire-c.component.html',
  styleUrls: ['./commentaire-c.component.css']
})
export class CommentaireCComponent implements OnInit {

  constructor(private locationSt: LocationStrategy) { }

  ngOnInit(): void {
    this.preventBackButton();

  }

  preventBackButton() {
    history.pushState(null, '', location.href);
     this.locationSt.onPopState(() => {
       history.pushState(null, '', location.href);
     });
   }

}
