import {
	JetView
} from "webix-jet";

export default class CommonData extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._tdata = data;
	}

	config() {
		return {
			rows: [
				{
					view: "datatable",
					localId: "datatableCommon",
					editable: true,
					autoConfig: true,
					editaction: "dblclick",
					scroll: "auto",
					select: true
				},
				{
					view: "button",
					value: "Add new",
					click: () => {
						this.$$("datatableCommon").add({});
					}
				},
				{
					view: "button",
					value: "Delete",
					click: () => {
						this.$$("datatableCommon").attachEvent("onAfterSelect", (id) => {
							this.$$("datatableCommon").remove(webix.$$(id));
						})
					}
				}
			]
		};
	}

	init(view) {
		view.queryView("datatable").parse(this._tdata);
	}
}

