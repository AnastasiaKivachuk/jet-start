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
		return {
			rows: [
				{
					view: "template",
					css: "contactTitle",
					autoheight: true,
					template: "Data",
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
								{
									id: "Countries",
									$subview: new CommonData(this.app, "",
										countries)
								},
								{
									id: "Statuses",
									$subview: new CommonData(this.app, "",
										statuses)
								}
								// {
								// 	localId: "Statuses",
								// 	rows:[
								// 		{ $subview: new CommonData(this.app, "",	statuses) }
								// 	]
								// }
							]

						}
					]
				}
			]
		};
	}

	init(view, url) {
		this.$$("mylist").select("Countries");
		this.$$("mylist").attachEvent("onAfterSelect", (id) => {
			webix.$$(id).show();
			//this.$$("id")
		})
		// if (url.length > 1)
		// view.queryView("list").setValue(url[1].page);
	}
}
