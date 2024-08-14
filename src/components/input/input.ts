import textStyle from "../text/text.css";
import inputStyle from "./input.css";

class Input extends HTMLElement {
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
	get value() {
		return this.getAttribute("value") ?? "";
	}
	set value(value: string) {
		this.setAttribute("value", value);
	}
	get helper() {
		return this.getAttribute("helper") ?? "";
	}
	set helper(helper: string) {
		this.setAttribute("helper", helper);
	}
	get id() {
		return this.getAttribute("id") ?? "";
	}
	set id(id: string) {
		this.setAttribute("id", id);
	}
	get placeholder() {
		return this.getAttribute("placeholder") ?? "";
	}
	set placeholder(placeholder: string) {
		this.setAttribute("placeholder", placeholder);
	}
	static get observedAttributes() {
		return ["label", "value", "helper", "id", "placeholder"];
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "value" || name === "placeholder") {
			this.render();
		}
	}
	onInput(e: any) {
		this.value = e.target.value;
	}
	activeEvents() {
		let input = this.shadow.querySelector(`#${this.id}`) as HTMLInputElement;
		if (input) {
			input.addEventListener("input", (e) => { this.onInput.bind(this)(e) });
			input.selectionStart = input.selectionEnd = input.value.length;
			input.focus();
		}
	}

	connectedCallback() {
		this.render();
		this.activeEvents();
	}
	render() {

		this.shadow.innerHTML = `
		<style>
		${inputStyle}
		</style>
		<div class="ik-input__container">
		${this.value !== "" ? `<label class="ik-input__label">${this.label}</label>` : ''} 
		<input id="${this.id}" placeholder="${this.placeholder === "" ? this.label : this.placeholder}" class="ik-input ik-input--focused" value="${this.value}"/>
		<p class="ik-input__helper">${this.helper}</p>
		</div>		
		`;
	}
}
customElements.define("ik-input-text", Input);