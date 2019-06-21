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


export default class ContactView extends JetView {
	config() {
		return {
			cols: [
				{
					rows: [
						{
							view: "template",
							css: "contactTitle",
							autoheight: true,
							template: "contact",
							align: "center"
						},
						{
							view: "list",
							localId: "contactList",
							autoConfig: true,
							width: 400,
							css: "webix_shadow_medium",
							select: true,
							template: "#Name# - #Email# <span class='webix_icon wxi-close removeUser'></span>",
							// on: {
							// 	onAfterSelect: (id) => {
							// 		this.$$("myform").setValues(webix.$$("contactList")
							// 			.getItem(id));
							// 	}
							// }
							click: () => {
								this.$$("contactList").attachEvent("onAfterSelect", (id) => {
									this.$$("contactList").remove(webix.$$(id));
								})


							// onClick: {
							// 	removeUser: function (e, id) {
							// 		webix.confirm({
							// 			text: "Do you still want to continue?"
							// 		}).then(
							// 			function () {
							// 				this.$$("contactList").remove(this.$$("contactList").getSelectedId());
							// 				this.$$("contactList").remove(webix.$$(id));
							// 			})
							// 	}
							// }
							}
						}
					]
				},
				{ $subview: true }
				// {
				// 	view: "form",
				// 	localId: "myform",
				// 	elements: [
				// 		{
				// 			view: "text",
				// 			label: "User Name",
				// 			name: "Name"
				// 		},
				// 		{
				// 			view: "text",
				// 			label: "Email",
				// 			name: "Email"
				// 		},
				// 		{
				// 			view: "richselect",
				// 			name: "Status",
				// 			label: "Status",
				// 			options: statuses.Name
				// 		},
				// 		{
				// 			view: "richselect",
				// 			name: "Country",
				// 			label: "Country",
				// 			options: countries
				// 		},
				// 		{view: "button", type: "form", value: "Save"},

				// 		{}
				// 	]
				// }
			]
		};
	}


	init() {
		this.$$("contactList").parse(contacts);
	}
}
