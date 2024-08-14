import buttonStyle from "./button.css";

class Button extends HTMLElement {
	shadow: ShadowRoot;
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}
	get label() {
		return this.getAttribute("label") ?? "";
	}
	set label(value: string) {
		this.setAttribute("label", value);
	}
	get disabled() {
		return this.getAttribute("disabled") ?? "false";
	}
	set disabled(value: string) {
		this.setAttribute("disabled", value);
	}
	get class() {
		return this.getAttribute("class") ?? "";
	}
	set class(value: string) {
		this.setAttribute("class", value);
	}
	static get observedAttributes() {
		return ["label", "disabled", "class"];
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.shadow.innerHTML = `
        <style>
		${buttonStyle}
		</style>
		<button 
        class="ik-btn-contained ${this.class ?? ''}" 
        ${this.disabled === "true" ? 'disabled' : ''}>
        ${this.label}
        </button>
		`;
	}
}
customElements.define("ik-btn-contained", Button);