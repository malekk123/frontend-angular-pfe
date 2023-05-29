import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

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
