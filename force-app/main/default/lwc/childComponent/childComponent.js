import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {

    @track fullName = '';
    @track gender = '';
    @track age;
    @track accept;

    get genderOptions() {
        return [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
        ];
    }
    get options() {
        return [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ];
    }

    handleNameChange(event) {
        this.fullName = event.target.value;
    }
    handleGenderChange(event){
        this.gender = event.target.value;
    }
    handleAgeChange(event){
        this.age = event.target.value;
    }
    handleValueChange(event){
        this.accept = event.target.value;
    }

    handleSubmit() {
        const formData = {
            fullName: this.fullName,
            gender: this.gender,
            age: this.age,
            accept: this.accept
        };
        //using lwc evemt-details
        const event = new CustomEvent('formsubmit', {
            detail: formData
        });
        this.dispatchEvent(event);
    }
    

    // handleFormSubmit() {
    //     const event = new CustomEvent('formsubmit', {
    //         detail: { 
    //             name: this.fullName,
    //             age: this.age,
    //             gender: this.gender,
    //             accept: this.accept
    //          }
    //     });
    //     this.dispatchEvent(event);
    // }
    
} 