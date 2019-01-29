class Pet {
    _id:string;
    name: string;
    petName: string;
    description: string; 
    date: Date;
    status: string;
  
  constructor(){
    this.name = ""
    this.petName = ""
    this.description = ""
    this.date = new Date()
    this.status = ""
    }

}   
export default Pet;