import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {

    @track fullName = '';
    @track gender = '';
    @track age = '';
    @track accept = false;

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
        const newformData = {
            fullName: this.fullName,
            gender: this.gender,
            age: this.age,
            accept: this.accept
        };
        //using lwc evemt-details
        const event = new CustomEvent('formsubmit', {
            detail: newformData
        });
        this.dispatchEvent(event);

        //reset the form back for next submission
        this.fullName = '';
        this.gender = '';
        this.age = '';
        this.accept = false;
    
    }
    
} 