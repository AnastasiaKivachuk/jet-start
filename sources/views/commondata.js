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
			rows: [{
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
					let idS = this.$$("datatableCommon").getSelectedId();
					this.$$("datatableCommon").remove(idS);
				}
			}
			]
		};
	}

	init() {
		this.$$("datatableCommon").parse(this._tdata);
	}
}
