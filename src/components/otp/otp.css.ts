const otpStyle = `@font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

.ik-otp-input {
    display: inline-block;
    max-width: 57px;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #512BDA;
    text-align: center;
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin-inline: 6px;

    @media (max-width: 768px) {
        width: 24px;
        max-width: 24px;
        height: 24px;
        max-height: 24px;
    }

    @media (max-width: 590px) {
        width: 7px;
        max-width: 7px;
        height: 7px;
        max-height: 7px;
        margin-inline: 2px;
    }

}

.ik-otp-inputs--focused {
    background: #F3EEFC;
    border-radius: 4px 4px 0px 0px;
}

.ik-input__helper {
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-inline: 6px;
    margin-top: 6px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    text-align: left;
}

.ik-otp-inputs {
    width: fit-content;
}

.ik-otp__container {
    display: flex;
    margin-top: 70px;
}

.ik-otp__container--center {
    margin: auto;
}

.ik-otp-input::placeholder {
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
}

.ik-otp-input:focus {
    outline: none;
}

.ik-otp-input--error {
    border-bottom: 4px solid #B3261E
}

.ik-otp-inputs--error {
    display: flex;
    height: 48px;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 4px 4px 0px 0px;
    background: #EFD0D1;

    @media (max-width: 430px) {
        padding: 6px 8px;
    }


}

.ik-otp__title {
    margin-bottom: 32px;
    display: flex;
    place-content: center;
    text-align: center;
}

.ik-otp__description {
    text-align: center;
}

.ik-opt__container-reset {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 16px;
}

.ik-otp__help {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.ik-otp__resend {
    align-content: center;
}

.ik-otp__resend--disabled {
    cursor: not-allowed;
}

.ik-otp__resend--active {
    cursor: pointer;
}

.ik-otp__timer {
    display: flex;
    height: 100%;
    align-items: center;
}`
export default otpStyle;