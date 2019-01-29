import { Response } from '@angular/http';
import { PetService } from '../services/pet.services';
import Pet from '../models/pet.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})

export class PetComponent implements OnInit {
  
  constructor(
    //Private petservice will be injected into the component by Angular Dependency Injector
    private petService: PetService
  ) { }

  //Declaring the new pet Object and initilizing it
  public newPet: Pet = new Pet()

  //An Empty list for the visible pest list
  //instatiates an empty array to allow methods to have aa holding 
  petsList: Pet[];
  editPets: Pet[] = []; // the equals [] 
  

//calls the service ask the service for the pets
  ngOnInit(): void {

    //At component initialization the 
    this.petService.getPets()
      .subscribe(pets => {
        //assign the petlist property to the proper http response
        this.petsList = pets
        console.log(pets)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.petService.createPet(this.newPet)
      .subscribe((res) => {
        this.petsList.push(res.data)
        this.newPet = new Pet() /// this allows the new pet in form to clear the fields
      })
  }

  //edit function
  editPet(pet: Pet) {
    console.log(pet)//debug code line to see values
     if(this.petsList.includes(pet)){ // is this a pet retrieved from the api
      if(!this.editPets.includes(pet)){ //is this in the list to be edited
        this.editPets.push(pet) //if not in the list add to edit list
      }else{
        this.editPets.splice(this.editPets.indexOf(pet), 1)// remove this element from the array get the right pets
        this.petService.editPet(pet).subscribe(res => { // call to service
          console.log('Update Succesful')
         }, err => {
          
            console.error('Update Unsuccesful')
          })
        }
      }
    }
//updating the status to complete change status to done //changed from Done
    donePet(pet:Pet){
      pet.status = 'Checked Out'
      this.petService.editPet(pet).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        
        console.error('Update Unsuccesful')
      })
    }

    //listening for the enter key event if selected edit pet field
    submitPet(event, pet:Pet){
      if(event.keyCode ==13){ // keycode ==13 is the enter key
        this.editPet(pet)
      }
    }

    //delete function
    deletePet(pet: Pet) {
      this.petService.deletePet(pet._id).subscribe(res => {
        this.petsList.splice(this.petsList.indexOf(pet), 1);
        //betterway can ask api for the list
      })
    }

}


