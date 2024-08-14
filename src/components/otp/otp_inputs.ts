import textStyle from "../text/text.css";
import otpStyle from "./otp.css";

class OtpInputs extends HTMLElement {
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
	get otplength() {
		return this.getAttribute("otplength") ?? "";
	}
	set otplength(value: string) {
		this.setAttribute("otplength", value);
	}
	get otp() {
		return this.getAttribute("otp") ?? "";
	}
	set otp(value: string) {
		this.setAttribute("otp", value);
	}
	get error() {
		return this.getAttribute("error") ?? "";
	}
	set error(value: string) {
		this.setAttribute("error", value);
	}
	get focused() {
		return this.getAttribute("focused") ?? "";
	}
	set focused(value: string) {
		this.setAttribute("focused", value);
	}
	get helper() {
		return this.getAttribute("helper") ?? "";
	}
	set helper(value: string) {
		this.setAttribute("helper", value);
	}
	get msgerror() {
		return this.getAttribute("msgerror") ?? "";
	}
	set msgerror(value: string) {
		this.setAttribute("msgerror", value);
	}
	static get observedAttributes() {
		return ["class", "otplength", "otp", "error", "focused", "helper", "msgerror"];
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "error" || name === "focused") {
			this.render();
		}
	}
	connectedCallback() {
		this.render();
	}
	activateEvents() {
		this.shadow.querySelectorAll<HTMLInputElement>(".ik-otp-input").forEach((input, index, inputs) => {
			input.addEventListener("input", (e) => {
				const target = e.target as HTMLInputElement;
				target.value = input.value.replace(/[^0-9]/g, '');
				this.otp = Array.from(inputs).map((input) => input.value).join("")
				if (target.value.length > 1) {
					target.value = target.value[0];
				}
				if (target.value && inputs[index + 1]) {
					inputs[index + 1].focus();
				}
				if (!target.value && inputs[index - 1]) {
					inputs[index - 1].focus();
				}
			});
		});
	}

	render() {
		this.shadow.innerHTML = `
		<style>
		${otpStyle}
		</style>
		<div class="ik-otp__container">
		<div class="ik-otp__container--center" >
		<div class="ik-otp-inputs ${this.error === "true" ? 'ik-otp-inputs--error' : `${this.focused === "true" ? 'ik-otp-inputs--focused' : ''}`}  ${this.focused} ${this.class}">
			${Array.from({ length: Number(this.otplength) }, (_, i) => i).map((_, i) => {
			return `<input id="inpt-${i}" placeholder="-" type="text" class="ik-otp-input ${this.error === "true" ? 'ik-otp-input--error' : ''}" maxlength="1" />`
		}).join("")}		
		</div>
		<p class="ik-input__helper">${this.error === "true" ? `<img src="/src/assets/icons/error.svg"/> ${this.msgerror}` : `${this.helper}`}  </p>
		</div>
		</div>
			`;
		this.activateEvents();
	}

}
customElements.define("ik-otp-inputs", OtpInputs);