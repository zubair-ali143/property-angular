import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(private http: HttpClient) {}
  //Now we perform Get,Post,Put,Delete Methods

  //create data with post method
  addproperty(data: any) {
    return this.http.post('http://localhost:3000/properties', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //get all property with the help of get method
  getAllproperty() {
    return this.http.get('http://localhost:3000/properties').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //update property with the help put method
  updateproperty(id: number, data: any ) {
    return this.http.put(`http://localhost:3000/properties/${id}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //delete property with the help of delete method
  delproperty(id: number) {
    return this.http.delete(`http://localhost:3000/properties/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //signup for property
  signuppostMethod(signupdata:any){
    return this.http.post('http://localhost:3000/signup',signupdata).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // signup all values
  signupgetMethod(){
    return this.http.get('http://localhost:3000/signup').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
