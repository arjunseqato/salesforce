import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    

    @track formData = {};

    handleFormSubmit(event) {
        this.formData = event.detail;
    }

    handleParentSubmit() {
        console.log(JSON.parse(JSON.stringify(this.formData)));
    }
 
}