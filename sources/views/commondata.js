import {
	JetView
} from "webix-jet";

export default class CommonData extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._tdata = data;
	}

	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();
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
				value: _("Add"),
				click: () => {
					this._tdata.add({"Name":"NEW"});
					// this.$$("datatableCommon").add({});
				}
			},
			{
				view: "button",
				value: _("Delete"),
				click: () => {
					// let idS = this.$$("datatableCommon").getSelectedId();
					// if (idS) {
					// 	this.$$("datatableCommon").remove(idS);
					// }
					let idS = this.$$("datatableCommon").getSelectedId();
					if (idS) {
						this._tdata.remove(idS);
					}
				}
			}
			]
		};
	}

	init() {
		this.$$("datatableCommon").parse(this._tdata);
	}
}
