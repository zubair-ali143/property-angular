import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PropertiesService } from '../shared/properties.service';
import { propertiesModel } from './properties.modal';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  allProperty: Array<any> = [];
  name= "zubair ali"
  showAddbtn!: boolean;
  showEditbtn!: boolean;
  objEdit = {
    Ptitle: '',
    Pprice: '',
    Plocation: '',
    Pdetail: '',
    id: 0,
  };
  constructor(private fb: FormBuilder, private api: PropertiesService) {
    this.api.getAllproperty().subscribe((res) => {
      this.allProperty = res;
    });
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
    // console.log(data, 'data')

    // this.api.addproperty(data.value).subscribe((res) => {
    //   this.api.getAllproperty().subscribe((res) => {
    //     this.allProperty = res;
    //   });
    // });
    //here is the code post method(addproperty(added new value in db)) &
    // get method(getAllproperty(you save data in db you just call all properties from the db ))
    this.api.addproperty(this.myForm.value).subscribe((res) => {
      this.api.getAllproperty().subscribe((res) => {
        this.allProperty = res;
      });
    });
    //modal closed after data added in the table (start)
    let ref = document.getElementById('clear');
    ref?.click();
    //end
    this.myForm.reset();
  }

  //delete items with delete api service
  delItemproperty(data: any) {
    this.api.delproperty(data.id as number).subscribe((res) => {
      if (res) {
        this.api.getAllproperty().subscribe((res) => {
          this.allProperty = res;
        });
      } else {
        alert('Sometind Went Wrong');
      }
    });
  }

  showaddListingbtn() {
    this.showAddbtn = true;
    this.showEditbtn = false;
  }
  showEditListingbtn(data: any) {
    this.objEdit = data;
    this.showAddbtn = false;
    this.showEditbtn = true;
  }
  //for update value
  updatuser() {
    this.api.updateproperty(this.objEdit.id, this.objEdit).subscribe((res) => {
      this.api.getAllproperty().subscribe((res) => {
        this.allProperty = res;
      });
    });
    let ref = document.getElementById('clear');
    ref?.click();
    // this.myForm.reset();
  }
}
