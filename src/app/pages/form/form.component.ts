import { Component, OnInit } from '@angular/core';
import {ImageI} from '../../interfaces/image-i'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmmit(form: NgForm){
  }

}
