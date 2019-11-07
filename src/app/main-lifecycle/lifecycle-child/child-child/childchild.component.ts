import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-childchild',
  templateUrl: './childchild.component.html',
  styleUrls: ['./childchild.component.css']
})
export class childchildComponent implements OnInit{

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log(" Child Child (ngOnInit) - " + this.name)
  }

  ngOnChanges(){
    console.log(" Child Child (ngOnChanges) - " + this.name)
  }

  ngAfterContentInit(){
    console.log(" Child Child (ngAfterContentInit) - " + this.name)
  }

}
