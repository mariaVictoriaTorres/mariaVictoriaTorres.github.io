import textStyle from "../text/text.css";
import modalStyle from "./modal.css";

class Modal extends HTMLElement {
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
	get show() {
		return this.getAttribute("show") ?? "";
	}
	set show(value: string) {
		this.setAttribute("show", value);
	}
	static get observedAttributes() {
		return ["class", "header", "show"];
	}
	get type() {
		return this.getAttribute("type") ?? "";
	}
	set type(value: string) {
		this.setAttribute("type", value);
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "show") {
			this.render();
		}
	}
	connectedCallback() {
		this.render();
	}
	getIcon() {
		switch (this.type) {
			case "success":
				return "/src/assets/icons/success_modal.svg";
			case "error":
				return "/src/assets/icons/error_modal.svg";
			case "warning":
				return "/src/assets/icons/warning_modal.svg";
			case "info":
				return "/src/assets/icons/info_modal.svg";
			default:
				return "";
		}
	}
	render() {
		this.shadow.innerHTML = `
		<style>
		${modalStyle}
		${textStyle}
		</style>
				<div  class="ik-modal ${this.show === "true" ? 'ik-modal--show' : 'ik-modal--hide'}"
  					<!-- Modal content -->
  					<div class="ik-modal-content">
					<img src="${this.getIcon()}"/>
					<ik-text type="title" class="ik-modal__title" fontstyle="semi-bold" size="xs" color="bold"
				>${this.header}</ik-text>
    					<slot></slot>
  					</div>
				</div>
				`;
	}
}
customElements.define("ik-modal", Modal);