// export const countries = [
// 	{"id":1,"Name":"USA"},
// 	{"id":2,"Name":"Canada"},
// 	{"id":3,"Name":"Italy"}
// ];

export const countries = new webix.DataCollection({
	save: "rest->http://localhost:8096/api/v1/countries/",
	url: "rest->http://localhost:8096/api/v1/countries/"
});
