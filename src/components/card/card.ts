import cardStyle from "./card.css";

class Card extends HTMLElement {
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
	static get observedAttributes() {
		return ["class"];
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.shadow.innerHTML = `
		<style>
		${cardStyle}
		</style>
				<div class="ik-card ${this.class}">
					<slot></slot>
				</div>
				`;
	}
}
customElements.define("ik-card", Card);