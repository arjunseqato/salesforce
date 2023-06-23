import { LightningElement, track } from 'lwc';

// class Master {
//     fullName= '';
//     gender= '';
//     age ='';
//     accept=false;
// }

export default class ParentComponent extends LightningElement {
    
    // messageText = 'This is a message from parent component using @api';
    

    

    // handleClick() {
    //     this.messageText = 'Message changed';
    //     this.template.querySelector('c-child-component').childFunction(this.messageText);
    // }


    // @track formData = new Master;

    // handleFormSubmit(event){
    //     this.formData = event.detail;
    //     console.log(event)
    // }

    // handleSubmit(){
    //     console.log(JSON.parse(JSON.stringify(this.formData)));
    // }



    // handleEvent(event) {
    //     let key =event.detail.key;
    //     let value = event.detail.value;
    //     this.messageText = key + ' ' + value;
    //     window.console.log(' ', this.messageText);
    //     alert(this.messageText)
    // }

    @track formData = {};

    handleFormSubmit(event) {
        this.formData = event.detail;
    }

    handleParentSubmit() {
        console.log('Form Data:', this.formData);
    }
 
}