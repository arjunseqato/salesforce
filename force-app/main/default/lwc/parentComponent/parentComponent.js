import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    

    @track formDataList = [];

    handleFormSubmit(event) {
        const newformData = event.detail;
        this.formDataList.push(newformData);
    }

    handleParentSubmit() {
        console.log(JSON.parse(JSON.stringify(this.formDataList)));
    }
 
}