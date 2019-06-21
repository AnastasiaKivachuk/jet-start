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
							template: "#Name# - #Email# <span class='webix_icon wxi-close removeUser'></span>"

							// on: {
							// 	onAfterSelect: (id) => {
							// 		this.$$("myform").setValues(webix.$$("contactList")
							// 			.getItem(id));
							// 	}
							// }

							// onClick: {
							// 	removeBtn: (e, id) => {
							// 		this.$$("contactList").remove(id);
							// 	}
							// }
							// click: () => {

							// 	let idS = this.$$("contactList").getSelectedId();
							// 	this.$$("contactList").remove(idS);
							// }


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
						},
						{
							view: "button",
							value: "Add new",
							click: () => {
								this.$$("contactList").add({"Name": "New name", "Email": "New email"});
							}
						}
					]
				},
				{
					$subview: "/contactform"
				}
			]
		};
	}


	init() {
		this.$$("contactList").parse(contacts);
		this.$$("contactList").select(this.$$("contactList").getFirstId());
	}
}
