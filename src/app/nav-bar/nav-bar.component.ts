import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() username:any

  @Output() childtoparent = new EventEmitter<any>();
  // allProperty: Array<any> = [];

  constructor(private fb: FormBuilder, private api: PropertiesService) {
    // this.api.getAllproperty().subscribe((res) => {
    //   this.allProperty = res;
    // });
  }
 ngOnInit(): void {}
  //use reactiveForm for get input values from Modal
  myForm = new FormGroup({
    id: new FormControl(''),
    Ptitle: new FormControl(''),
    Pprice: new FormControl(''),
    Plocation: new FormControl(''),
    Pdetail: new FormControl(''),
  });
    //add property (create method)
    addprop() {
      //here is the code post method(addproperty(added new value in db)) &
      // get method(getAllproperty(you save data in db you just call all properties from the db ))
      // this.api.addproperty(this.myForm.value).subscribe((res) => {
      //   this.api.getAllproperty().subscribe((res) => {
      //     this.allProperty = res;
      //   });
      // });
      //modal closed after data added in the table (start)
      let ref = document.getElementById('clear1');
      ref?.click();
      //end
      this.myForm.reset();
    }
}
