import textStyle from "../text/text.css";
import alertStyle from "./alert.css";

class Alert extends HTMLElement {
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
    get type() {
        return this.getAttribute("type") ?? "";
    }
    set type(value: string) {
        this.setAttribute("type", value);
    }
    static get observedAttributes() {
        return ["class", "header", "type"];
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
			<style>
            ${alertStyle}
            ${textStyle}
            </style>
				<div class="ik-alert ik-alert__border--${this.type} ${this.class}">
                <div class="ik-alert__header">
                <img class="ik-alert__icon" src="/src/assets/icons/${this.type}_alert.svg"/>
                <ik-text class="ik-alert__title" type="text" fontstyle="semi-bold" size="s" color="bold">${this.header}</ik-text>
                </div>                
					<slot></slot>
				</div>
				`;
    }
}
customElements.define("ik-alert", Alert);