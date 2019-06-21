import {
	JetView
} from "webix-jet";
import {
	contacts
} from "../models/contacts";
import {
	countries
} from "../models/countries";
import {
	statuses
} from "../models/statuses";


export default class ContactFormView extends JetView {

	config() {
		return {
			view: "form",
			localId: "myform",
			elements: [
				{
					view: "text",
					label: "User Name",
					name: "Name"
				},
				{
					view: "text",
					label: "Emails",
					name: "Email"
				},
				{
					view: "richselect",
					name: "Status",
					label: "Status",
					value: 1,
					options: {
						body: {
							template: "#Name#",
							data: statuses
						}
					}
				},
				{
					view: "richselect",
					name: "Country",
					label: "Country",
					value: 1,
					options: {
						body: {
							template: "#Name#",
							data: countries
						}
					}

				},
				{
					view: "button",
					value: "Save",
					css: "webix_primary",
					click: function () {
						var form = this.$$('myform');
						if (form.isDirty()) {
							if (!form.validate())
								return false;
						
						}
					}
				},
				{}

			],
			rules: {
				Name: webix.rules.isNotEmpty,
				Email: webix.rules.isEmail
			}


		};
	}
	urlChange(){
		const id = this.getParam("id");
		
		if (id && contacts.exists(id)){
			this.$$("myform").setValues(contacts.getItem(id)); 
		}
    }
}
