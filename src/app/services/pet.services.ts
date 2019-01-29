import Pet from '../models/pet.models'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()//required to allow services to be pasted around
export class PetService {

  api_url = 'http://localhost:3000';
  petUrl = `${this.api_url}/api/pets`;

  constructor(private http: HttpClient) { }

//Create pet, takes a pet Object

createPet(pet: Pet): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.petUrl}`, pet);
  }

//Read pet, takes no arguments
getPets(): Observable<Pet[]>{
    return this.http.get(this.petUrl)//this function returns an observable
    .pipe(map(res  => {
      //Maps the response object sent from the server
        //map is success we are not handling errors in this example
      return res["data"].docs as Pet[];
    }))
  } 

//Update pet, takes a Pet Object as parameter makes a put request
editPet(pet:Pet){
    let editUrl = `${this.petUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, pet);
  } 
//delete pet
deletePet(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.petUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //currently not being used
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}