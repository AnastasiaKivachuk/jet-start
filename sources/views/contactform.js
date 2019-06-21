import {
	JetView
} from "webix-jet";
import {
	contacts
} from "./contacts";
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
			data: contacts,
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
					// click: function () {
					// 	var form = this.$$('myform');
					// 	if (form.isDirty()) {
					// 		if (!form.validate())
					// 			return false;
					// 		form.save();
					// 	}
					// }
				},
				{}

			],
			rules: {
				Name: webix.rules.isNotEmpty,
				Email: webix.rules.isEmail
			}


		};
	}

}
