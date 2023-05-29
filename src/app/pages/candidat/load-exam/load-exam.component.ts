import { Component, OnInit ,HostListener } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import {fromEvent} from 'rxjs';
import {merge} from 'rxjs';
import {debounce, map} from 'rxjs/operators';
import {timer} from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-load-exam',
  templateUrl: './load-exam.component.html',
  styleUrls: ['./load-exam.component.css']
})
export class LoadExamComponent implements OnInit {
  isSubmit = false;
  t5=20;
  timer:any;
  constructor(private locationSt: LocationStrategy,private _router:Router) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.bindKeypressEvent().subscribe(($event: KeyboardEvent) => this.onKeyPress($event));

   this.timer=this.t5 * 60;
   this.startTimer()
  }
  preventBackButton() {
   history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
  /*@HostListener('window:unload', ['$event'])
unloadHandler(event:any) {
    this.PostCall();
}

@HostListener('window:beforeunload', ['$event'])
beforeUnloadHander(event:any) {
    return false;
}

PostCall() {
    console.log('PostCall');
}*/
  onKeyPress($event: KeyboardEvent) {
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67)
    {Swal.fire(
      'Oops',
      'Vous n"avez pas le droit de copier l"énoncé ?',
      'error'
    ) ;   
    console.log('CTRL + C');
    }
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 86)
        console.log('CTRL +  V');
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 84)
    console.log('CTRL +  T');
}

private bindKeypressEvent(): Observable<KeyboardEvent> {
    const eventsType$ = [
        fromEvent(window, 'keypress'),
        fromEvent(window, 'keydown')
    ];
    // we merge all kind of event as one observable.
    return merge(...eventsType$)
        .pipe(
            // We prevent multiple next by wait 10ms before to next value.
            debounce(() => timer(10)),
            // We map answer to KeyboardEvent, typescript strong typing...
            map(state => (state as KeyboardEvent))
        );
}

startTimer() {
  let t = window.setInterval(() => {
    //code
    if (this.timer <= 0) {
    //  this.evalQuiz();
    this._router.navigate(['candidat/examcandidat']);
    clearInterval(t);
    } else {
      this.timer--;
    }
  }, 1000);
}



getFormattedTime() {
 // let mm= this.timer;
  let mm = Math.floor(this.timer / 60);
  let ss = this.timer - mm * 60;
  return `${mm} min : ${ss} sec`;
}


evalQuiz() {
  //calculation
  this.isSubmit = true;

}
}
