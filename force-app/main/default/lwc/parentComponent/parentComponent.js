import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'Full Name', fieldName: 'fullName' },
    { label: 'Gender', fieldName: 'gender'},
    { label: 'Age', fieldName: 'age'},
    { label: 'Acceptance', fieldName: 'accept'},
    { label: 'Address', fieldName: 'address'},
    { label: 'Date of Birth', fieldName: 'dob'}
];

export default class ParentComponent extends LightningElement {
    
    columns = columns;
    formDataList = [];

    handleFormSubmit(event) {
        const newformData = event.detail;
        this.formDataList.push(newformData);
        console.log(JSON.parse(JSON.stringify(this.formDataList)));
        
        //used to update UI instead of @track 
        this.formDataList = [...this.formDataList]
    }

    handleParentSubmit() {
        console.log(JSON.parse(JSON.stringify(this.formDataList)));
        
    }
}