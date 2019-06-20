import {
	JetView
} from "webix-jet";
import {
	countries
} from "../models/countries";
import {
	statuses
} from "../models/statuses";

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
								on: {
									onAfterSelect: function (id) {
										$$(id).show();
									}
								},
								data: ["Countries", "Statuses"]
							}
						]
						},
						{
							cells: [
								{
									id: "Countries",
									cols: [
										{
										localId: "tableCountries",
										view: "datatable",
										select: true,
										autoWidth: true,
										autoConfig: true,
										scrollX: false,
										columns: [
											{
											id: "Name",
											header: "Name",
											sort: "string",
											autoWidth: true
											}
											]
										}
									]
								},
								{
									id: "Statuses",
									cols: [
										{
											localId: "tableStatuses",
											view: "datatable",
											autoWidth: true,
											select: true,
											autoConfig: true,
											scrollX: false,
											columns: [
												{
													id: "Name",
													header: "Name",
													sort: "string"
												},
												{
													id: "Icon",
													header: "Icon",
													sort: "string"
												}
											]		
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
		this.$$("tableStatuses").parse(statuses);
		this.$$("tableCountries").parse(countries);
		this.$$("mylist").select("Countries");
	}
}
