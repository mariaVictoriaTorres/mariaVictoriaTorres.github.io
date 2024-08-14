import textStyle from "../text/text.css";
import otpStyle from "./otp.css";

class Timer extends HTMLElement {
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
    get reset() {
        return this.getAttribute("reset") ?? "";
    }
    set reset(value: string) {
        this.setAttribute("reset", value);
    }
    get seconds() {
        return this.getAttribute("seconds") ?? "";
    }
    set seconds(value: string) {
        this.setAttribute("seconds", value);
    }
    get start() {
        return this.getAttribute("start") ?? "";
    }
    set start(value: string) {
        this.setAttribute("start", value);
    }
    static get observedAttributes() {
        return ["class", "reset", "seconds", 'start'];
    }
    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
        if (name === "reset" || name === "start") {
            this.startTimer();
        }
    }
    startTimer() {
        const timerElement = this.shadow.getElementById("timer");
        if (timerElement) {
            let time = Number(this.seconds);
            timerElement.innerHTML = formatTime(time);
            const countdown = setInterval(() => {
                time--;
                timerElement.innerHTML = formatTime(time);
                if (time === 0) {
                    clearInterval(countdown);
                    this.dispatchEvent(new CustomEvent('finish'))
                }
            }, 1000);

            function formatTime(seconds: number): string {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
            }

            function padZero(value: number): string {
                return value.toString().padStart(2, "0");
            }
        }
    }
    connectedCallback() {
        this.render();
        this.start === "true" && this.startTimer();
    }
    render() {
        this.shadow.innerHTML = `
        <style>
		${otpStyle}
        ${textStyle}
		</style>
                <ik-text
                id="timer"
				type="text"
				fontstyle="medium"
				size="l" 
                class="ik-otp__timer"               
				color="semi-bold"
    >00:00</ik-text>
        `;


    }
}
customElements.define("ik-otp-timer", Timer);