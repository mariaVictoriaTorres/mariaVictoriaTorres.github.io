import textStyle from "./text.css";

class Text extends HTMLElement {
	shadow: ShadowRoot;
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	get class() {
		return this.getAttribute("class") ?? "";
	}
	set class(value: string) {
		this.setAttribute("class", value);
	}
	get type() {
		return this.getAttribute("type") ?? "";
	}
	set type(value: string) {
		this.setAttribute("type", value);
	}
	get fontstyle() {
		return this.getAttribute("fontstyle") ?? "";
	}
	set fontstyle(value: string) {
		this.setAttribute("fontstyle", value);
	}
	get color() {
		return this.getAttribute("color") ?? "";
	}
	set color(value: string) {
		this.setAttribute("color", value);
	}
	get size() {
		return this.getAttribute("size") ?? "";
	}
	set size(value: string) {
		this.setAttribute("size", value);
	}
	static get observedAttributes() {
		return ["class", "type", "fontstyle", "color", "size"];
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.shadow.innerHTML = `
			<style>
				${textStyle}
			</style>
				<span class="${this.type === "title" ? 'ik-title' : 'ik-text'}  ik-text--${this.fontstyle} ik-text--${this.color} ${this.type === "title" ? `ik-title--${this.size}` : `ik-text--${this.size}`} ${this.class}"><slot></slot></span>
				`;
	}
}
customElements.define("ik-text", Text);