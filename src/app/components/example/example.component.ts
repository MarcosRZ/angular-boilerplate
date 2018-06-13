import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public x = [1, 2, 3, 4, 5];
  public o = { name: 'Marcos', age: '28', band: 'BlobFish' };
  public band: String;
  public a: Number;

  constructor() { }

  ngOnInit() {

    const a = [...this.x];

    const { band } = this.o;

    console.log(band);

    this.band = band;
  }

}
