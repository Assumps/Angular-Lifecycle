import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() { 
    console.log(this.name + " - Constructor");
  }

  ngOnInit() {
    console.log(this.name + " - ngOnInit");
  }

  ngOnDestroy(){
    console.log(this.name + " - ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChange){
    console.log(this.name + " - ngOnChanges");
  }

  ngAfterContentInit(){
    console.log(this.name + " - ngAfterContentInit");
  }
  ngAfterViewInit(){
    console.log(this.name + " - ngAfterViewInit");
  }

}
