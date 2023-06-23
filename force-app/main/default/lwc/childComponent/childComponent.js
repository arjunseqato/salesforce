import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {

    fullName = '';
    gender = '';
    age = '';
    accept = '';
    address = '';
    dob = '';


    reportInputValidity(className) {
        let error = 0;
        let inputFields = this.template.querySelectorAll(className);
        inputFields.forEach(inputField => {
            if(!inputField.reportValidity()) {
                error++;
            }
        });
        return error === 0;
    }

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

    handleInputChange(event){
        // console.log(event.target.name)
        switch (event.target.name) {
            case 'selectName':
                this.fullName = event.target.value;
                break;
            case 'selectAge':
                this.age = event.target.value;
                break;
            case 'selectAddress':
                this.address = event.target.value;
                break;
            case 'selectGender':
                this.gender = event.target.value;
                break;
            case 'selectDob':
                this.dob = event.target.value;
                break;
            case 'selectTerms':
                this.accept = event.target.value;
                break;
            default:
                break;
        }
    }
    // handleNameChange(event) {
    //     this.fullName = event.target.value;

    // }
    // handleGenderChange(event){
    //     this.gender = event.target.value;
    // }
    // handleAgeChange(event){
    //     this.age = event.target.value;
    // }
    // handleValueChange(event){
    //     this.accept = event.target.value;
    // }
    // handleAddressChange(event) {
    //     this.address = event.target.value;
    // }
    // handleDobChange(event) {
    //     this.dob = event.target.value;
    // }
    


    handleSubmit() {
        const valid = this.reportInputValidity('.input');
        if(valid) {
            // alert(valid)
            const newformData = {
                fullName: this.fullName,
                gender: this.gender,
                age: this.age,
                accept: this.accept,
                address: this.address,
                dob : this.dob
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
            this.address='';
            this.dob  = '';
        }
    
    }
    
} 