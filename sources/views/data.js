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
									rows: [
										{
											cols: [
												{
													localId: "tableCountries",
													view: "datatable",
													edit: true,
													editable: true,
													editaction: "dblclick",
													editor: "text",
													select: true,
													autoWidth: true,
													autoConfig: true,
													scrollX: false,
													columns: [
														{
															id: "Name",
															editor: "text",
															header: "Name",
															sort: "string",
															autoWidth: true
														}
													],
													rules: {
														Name: webix.rules.isNotEmpty,
													}

												}
											]
										},
										{
											cols: [
												{
													view: "button",
													value: "Add new",
													css: "webix_primary",
													click: function () {
														if ($$("tableCountries").validate()) {
															$$("tableCountries").add({ "name": "New name" });
														}
													}
												},
												{
													view: "button",
													value: "Clear",
													click: function () {
														webix.confirm({
															text: "Do you still want to continue?"
														}).then(
															function () {
																$$("tableCountries").remove($$("tableCountries").getSelectedId());
															},
														);
													}
												}
											]
										}
									]

								},
								{
									id: "Statuses",
									rows: [
										{
											cols: [
												{
													//localId: "tableStatuses",
													view: "datatable",
													autoWidth: true,
													edit: true,
													editable: true,
													editaction: "dblclick",
													editor: "text",
													select: true,
													autoConfig: true,
													scrollX: false,
													// columns: [
													// 	{
													// 		id: "Name",
													// 		editor: "text",
													// 		header: "Name",
													// 		sort: "string"
													// 	},
													// 	{
													// 		id: "Icon",
													// 		editor: "text",
													// 		header: "Icon",
													// 		sort: "string"
													// 	}
													// ],
													rules: {
														Name: webix.rules.isNotEmpty,
														Icon: webix.rules.isNotEmpty
													}

												}
											]
										},
										{
											cols: [
												{
													view: "button",
													value: "Add new",
													css: "webix_primary",
													click: function () {
														if ($$("tableStatuses").validate()) {
															$$("tableStatuses").add({ "Name": "New name" ,"Icon": "New icon" 
														});
														}
													}
												},
												{
													view: "button",
													value: "Clear",
													click: function () {
														webix.confirm({
															text: "Do you still want to continue?"
														}).then(
															function () {
																$$("tableStatuses").remove($$("tableStatuses").getSelectedId());
															},
														);
													}
												}
											]
										}
									]

								},
								
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
