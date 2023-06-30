import { LightningElement } from 'lwc';

export default class FormValidation extends LightningElement {
    fullName = '';
    gender = '';
    age; 
    address = '';
    url = '';
    email = '';
    eventObject = {};

    get genderOptions() {
        return [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
        ];
    }

    handleChanges(event) {
        this.eventObject[event.target.name] = event.target.value;
    }

    handleAddressChange(event) {
        const regex = /^[a-zA-Z0-9\s]+$/;     //required regex
        const validAddress = regex.test(event.target.value);  //test the atrget value with regex
        const addressInput = this.template.querySelector('.address');    //fetch the element with '.address' classs to call custom validation 
        if(validAddress) {
            this.eventObject[event.target.name] = event.target.value;
            addressInput.setCustomValidity(''); //remove the custom error message 
        } else {
            console.log('error');
            console.log(addressInput);
            addressInput.setCustomValidity('Inavlid format');   //add custom error message
        };
        addressInput.reportValidity(); // passing the error to the template is done by reportValidity()
        
    }

    //blank field - input validation
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

    handleSubmit() {
        const valid = this.reportInputValidity('.input');
        if(valid) {
            console.log(JSON.parse(JSON.stringify(this.eventObject)));
        }
    }

}