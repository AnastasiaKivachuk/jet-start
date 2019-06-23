// export const statuses = [
// 	{"id":1,"Name":"Busy","Icon":"cogs"},
// 	{"id":2,"Name":"Open","Icon":"user"}
// ];

export const statuses = new webix.DataCollection({
	save: "rest->http://localhost:8096/api/v1/statuses/",
	url: "rest->http://localhost:8096/api/v1/statuses/"
});
