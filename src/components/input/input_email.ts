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
	get msgerror() {
		return this.getAttribute("msgerror") ?? "";
	}
	set msgerror(msgerror: string) {
		this.setAttribute("msgerror", msgerror);
	}
	get id() {
		return this.getAttribute("id") ?? "";
	}
	set id(id: string) {
		this.setAttribute("id", id);
	}
	get invalid() {
		return this.getAttribute("invalid") ?? "";
	}
	set invalid(invalid: string) {
		this.setAttribute("invalid", invalid);
	}
	get placeholder() {
		return this.getAttribute("placeholder") ?? "";
	}
	set placeholder(placeholder: string) {
		this.setAttribute("placeholder", placeholder);
	}
	static get observedAttributes() {
		return ["label", "value", "helper", "id", "invalid", "msgerror", "placeholder", "onInvalid"];
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "value" || name === "invalid" || name === "placeholder") {
			this.render();
		}
	}
	onInput(e: any) {
		const value = e.target.value;
		this.value = value
		const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
		this.invalid = String(!regexEmail.test(value) && value.trim() !== '');

	}
	activeEvents() {
		let input: HTMLInputElement = this.shadow.querySelector(`#${this.id}`) as HTMLInputElement;
		if (input) {
			input.addEventListener("input", (e) => { this.onInput.bind(this)(e) });
			input.selectionStart = input.selectionEnd = input.value.length;
			input.focus();
		}
	}

	connectedCallback() {
		this.render();
	}
	render() {

		this.shadow.innerHTML = `
		<style>
		${inputStyle}
		</style>
		<div class="ik-input__container">
		${this.value !== "" ? `<label class="ik-input__label">${this.label}</label>` : ''} 
		<input  placeholder="${this.placeholder === "" ? this.label : this.placeholder}"  id="${this.id}" class="ik-input ${this.invalid === "true" ? 'ik-input--invalid' : 'ik-input--focused'}" value="${this.value}"/>
		<p class="ik-input__helper">${this.invalid === "true" ? '<img src="/src/assets/icons/error.svg"/>' : ''}  ${this.invalid === "true" ? this.msgerror : this.helper}</p>
		</div>		
		`;
		this.activeEvents();
	}
}
customElements.define("ik-input-email", Input);