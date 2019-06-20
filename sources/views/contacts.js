import {
	JetView
} from "webix-jet";
import {
	contacts
} from "../models/contacts";

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
							on: {
								onAfterSelect:  (id) => {
									this.$$("myform").setValues($$("contactList")
										.getItem(id));
								}
							},

							onClick: {
								removeUser: function (e, id) {
									webix.confirm({
										text: "Do you still want to continue?"
									}).then(
										function () {
											this.$$("contactList").remove(contactsValue.getSelectedId());
										})
								}
							}

						}
					]
				},
				{
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

						{}
					]
				}
			]
		};
	}


	init() {
		const contactsValue = this.$$("contactList");
		contactsValue.parse(contacts);
	}
}

