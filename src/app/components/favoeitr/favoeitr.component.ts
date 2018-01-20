import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoeitr',
  templateUrl: './favoeitr.component.html',
  styleUrls: ['./favoeitr.component.css']
})
export class FavoeitrComponent implements OnInit {
  isFavorite: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onClick() { 
    this.isFavorite = !this.isFavorite;
  }
}
