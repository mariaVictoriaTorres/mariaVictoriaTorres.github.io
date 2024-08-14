import textStyle from "../text/text.css";
import otpStyle from "./otp.css";

class Otp extends HTMLElement {
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
	get header() {
		return this.getAttribute("header") ?? "";
	}
	set header(value: string) {
		this.setAttribute("header", value);
	}
	get description() {
		return this.getAttribute("description") ?? "";
	}
	set description(value: string) {
		this.setAttribute("description", value);
	}
	get channel() {
		return this.getAttribute("channel") ?? "";
	}
	set channel(value: string) {
		this.setAttribute("channel", value);
	}
	get otplength() {
		return this.getAttribute("otplength") ?? "";
	}
	set otplength(value: string) {
		this.setAttribute("otplength", value);
	}
	get msgerror() {
		return this.getAttribute("msgerror") ?? "";
	}
	set msgerror(value: string) {
		this.setAttribute("msgerror", value);
	}
	get error() {
		return this.getAttribute("error") ?? "";
	}
	set error(value: string) {
		this.setAttribute("error", value);
	}
	get helper() {
		return this.getAttribute("helper") ?? "";
	}
	set helper(value: string) {
		this.setAttribute("helper", value);
	}
	get seconds() {
		return this.getAttribute("seconds") ?? "";
	}
	set seconds(value: string) {
		this.setAttribute("seconds", value);
	}
	get txtresend() {
		return this.getAttribute("txtresend") ?? "";
	}
	set txtresend(value: string) {
		this.setAttribute("txtresend", value);
	}
	get help() {
		return this.getAttribute("help") ?? "";
	}
	set help(value: string) {
		this.setAttribute("help", value);
	}
	get action() {
		return this.getAttribute("action") ?? "";
	}
	set action(value: string) {
		this.setAttribute("action", value);
	}
	get linkdisabled() {
		return this.getAttribute("linkdisabled") ?? "";
	}
	set linkdisabled(value: string) {
		this.setAttribute("linkdisabled", value);
	}
	static get observedAttributes() {
		return ["class", "header", "description", "channel", "otplength", "msgerror", "error", "helper", "seconds", "txtresend", "help", "action", "linkdisabled"];
	}
	connectedCallback() {
		this.linkdisabled = "true";
		this.render();


	}
	render() {
		this.shadow.innerHTML = `
		<style>
		${otpStyle}
		${textStyle}
		</style>
			<ik-text
				type="title"
				fontstyle="bold"
				size="m"
				class="ik-otp__title"
				color="primary"
			>${this.header}</ik-text>

			<ik-text
				type="text"
				fontstyle="bold"
				size="m"
				color="grey"
				class="ik-otp__description"
				>
				${this.description}
				<ik-text
				type="text"
				fontstyle="bold"
				size="m"
				color="grey"
				>${this.channel}
				</ik-text> 
			</ik-text>
			
			<ik-otp-inputs
				otplength="${this.otplength}"
				helper="${this.helper}"
				error="${this.error}"
				msgError="${this.msgerror}"
			></ik-otp-inputs>				
				
			<div class="ik-opt__container-reset">
			 <ik-otp-timer 
			 id="otp-timer" 
			 seconds="${this.seconds}" 
			 start="${this.linkdisabled === "true" ? 'true' : 'false'}"
			 ></ik-otp-timer>
			 <ik-text
			 	id="resend"
				type="text"
				fontstyle="bold"
				size="s"
				class="ik-otp__resend ${this.linkdisabled === "false" ? 'ik-otp__resend--active ' : 'ik-otp__resend--disabled'}"
				color="${this.linkdisabled === "false" ? 'primary' : 'light-grey'}"
			>${this.txtresend}</ik-text>
			<img src="/src/assets/icons/${this.linkdisabled === "true" ? 'replay-disabled' : 'replay-active'}.svg"/>
			</div>
			<ik-text
				id="help"
				type="text"
				fontstyle="bold"
				size="s"
				class="ik-otp__help"
				color="black"
			>${this.help}</ik-text>
				`;
		this.shadow.getElementById("resend")?.addEventListener("click", () => {
			this.action = "resend";
			this.linkdisabled = "true";
			this.render();
		});
		this.shadow.getElementById("help")?.addEventListener("click", () => {
			this.action = "help";
		});
		this.shadow.getElementById("otp-timer")?.addEventListener("finish", () => {
			this.linkdisabled = "false";
			this.render();
		});
	}
}
customElements.define("ik-otp", Otp);