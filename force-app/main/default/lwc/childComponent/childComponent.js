import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    // @api message;

    // @api childFunction(name){
    //     this.message = name
    //     alert(name);
    // }
    // handleClick(){
    //     const event = new CustomEvent('btnclick', {
    //         detail: { 
    //             key: '001ABCD',
    //             value: 'Arjun'
    //          }
    //     });
    //     this.dispatchEvent(event);
    // }





    // @api formData;
    // connectedCallback() {
    //     console.log(JSON.parse(JSON.stringify(this.formData)));
    // }
    //  fullName = '';
    //  gender = '';
    //  age;
    //  accept;

    // get genderOptions() {
    //     return [
    //         { label: 'Male', value: 'male' },
    //         { label: 'Female', value: 'female' },
    //         { label: 'Other', value: 'other' },
    //     ];
    // }
    // get options() {
    //     return [
    //         { label: 'Yes', value: 'yes' },
    //         { label: 'No', value: 'no' },
    //     ];
    // }

    // handleNameChange(event) {
    //     this.formData.fullName = event.target.value;
    //     // console.log(JSON.parse(JSON.stringify(this.formData)));
    // }
    // handleGenderChange(event){
    //     this.formData.gender = event.target.value;
    //     // console.log(JSON.parse(JSON.stringify(this.formData)));
    //     // console.log(this.gender);
    // }
    // handleAgeChange(event){
    //     this.formData.age = event.target.value;
    //     // console.log(JSON.parse(JSON.stringify(this.formData)));
    //     // console.log(this.age);
    // }
    // handleValueChange(event){
    //     this.formData.accept = event.target.value;
    //     // console.log(JSON.parse(JSON.stringify(this.formData)));
    //     // console.log(this.accept);
    // }

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
    




    @track name;
    @track email;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleSubmit() {
        const formData = {
            name: this.name,
            email: this.email
        };
        this.dispatchEvent(new CustomEvent('formsubmit', { detail: formData }));
    }

} 