import {
	JetView
} from "webix-jet";
import {
	countries
} from "../models/countries";
import {
	statuses
} from "../models/statuses";
import CommonData from "./commondata";

export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();
		return {
			rows: [
				{
					view: "template",
					css: "contactTitle",
					autoheight: true,
					template: _("Data"),
					align: "center"
				},
				{
					cols: [

						{
							css: "menu",
							rows: [
								{
									view: "list",
									localId: "mylist",
									width: 200,
									scroll: false,
									select: true,
									data: ["Countries", "Statuses"]
								}
							]
						},
						{

							cells: [
								// {
								// 	id: "Countries",
								// 	$subview: new CommonData(this.app, "",
								// 		countries)
								// },
								// {
								// 	id: "Statuses",
								// 	$subview: new CommonData(this.app, "",
								// 		statuses)
								// }
								{
									localId: "Countries",
									rows: [
										{
											$subview: new CommonData(this.app,
												"", countries)
										}
									]
								},
								{
									localId: "Statuses",
									rows: [
										{
											$subview: new CommonData(this.app,
												"", statuses)
										}
									]
								}
							]

						}
					]
				}
			]
		};
	}

	init() {
		this.$$("mylist").select("Countries");
		this.$$("mylist").attachEvent("onAfterSelect", (id) => {
			this.$$(id).show();
		});
	}
}
