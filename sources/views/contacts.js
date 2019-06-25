import {
	JetView
} from "webix-jet";
import {
	contacts
} from "../models/contacts";
import ContactFormView from "./contactform";


export default class ContactView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();
		return {
			cols: [
				{
					rows: [
						{
							view: "template",
							css: "contactTitle",
							autoheight: true,
							template: _("contact"),
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
								onAfterSelect: (id) => {
									this.setParam("id", id, true);
								}
							},
							onClick: {
								removeUser: (e, id) => {
									webix.confirm({
										text: "Do you still want to continue?"
									}).then(
										() => {
											// const list = this.$$("contactList");
											id = contacts.getFirstId();
											if (id) {
												// list.select(id);
												this.show("./contacts");
												contacts.remove(id);
											}

											return false;
										}
									);
								}
							}
						},
						{
							view: "button",
							value: _("Add"),
							click: () => {
								contacts.add({"Name": "New name", "Email": "New email"});
							}
						}
					]
				},
				ContactFormView
			]
		};
	}


	init(view) {
		contacts.waitData.then(() => {
			view.queryView("list").sync(contacts);
		});
	}


	urlChange() {
		contacts.waitData.then(() => {
			const list = this.$$("contactList");
			let id = this.getParam("id");

			if (!id || !contacts.exists(id)) {
				id = contacts.getFirstId();
			}
			if (id) { list.select(id); }
		});
	}
}
