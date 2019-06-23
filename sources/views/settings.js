import {
	JetView
} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			rows: [
				{
					view: "template",
					css: "contactTitle",
					autoheight: true,
					template: _("Settings"),
					align: "center"
				},
				{
					name: "lang",
					optionWidth: 120,
					view: "segmented",
					label: "Language",
					options: [
						{id: "en", value: "English"},
						{id: "ru", value: "Russian"}
					],
					click: () => this.toggleLanguage(), value: lang},
				{}
			]

		};
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({name: "lang"}).getValue();
		langs.setLang(value);
		console.log(value);
	}
}

