import {
	JetView
} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{
					view: "template",
					css: "contactTitle",
					autoheight: true,
					template: "Settings",
					align: "center"
				},
				{
					cols: [
						{
						view: "richselect",
						label: "Categories",
						name: "categotyId",
						width: 500,
						value: "1",
						options: [
							{
								id: 1,
								value: "English"
							},
							{
								id: 2,
								value: "Russian"
							}
						]

					}
				]
				}
			]

		};
	}


	// init() {
	// 	const contactsValue = this.$$("contactList");
	// 	contactsValue.parse(contacts);
	// }
}
