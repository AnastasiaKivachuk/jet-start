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
					label: "Email",
					name: "Email"
				},
				{
					view: "richselect",
					name: "Status",
					label: "Status",
					options: statuses,
					template: "#Name#"
				},
				{
					view: "richselect",
					name: "Country",
					label: "Country",
					options: countries,
					template: "#Name#"
				},
				{
					view: "button",
					type: "form",
					value: "Save"
				},

				{}
			]


		};
	}


	init() {
	}
}
