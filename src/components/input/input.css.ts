const inputStyle = `@font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

.ik-input {
    display: flex;
    padding-inline: 16px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border: none;
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
    border-bottom: 1px solid var(--Primary-scale-Primary-400, #512BDA);
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    background-color: transparent;
    padding-top: 25px;
    line-height: 150%;

}
.ik-input::placeholder{
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
;
}

.ik-input--focused:focus {
    border-bottom: 4px solid var(--Primary-scale-Primary-400, #512BDA);
    background: #F3EEFC;

    /* Text/small/Medium */
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 21px */
    ;
}
.ik-input:focus-visible{
    outline: none  ;
}

.ik-input--focused:focus-visible {
    border: none;
    border-bottom: 4px solid var(--Primary-scale-Primary-400, #512BDA);
    outline: none;
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
}

.ik-input__label {
    color: var(--Dark-and-gray-scale-800, #3A3A3A);
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    padding-inline: 16px;
    position: absolute;
    top:6px
}

.ik-input__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 4px 4px 0px 0px;
    background: #FFF;
    position: relative;
}

.ik-input__helper {
    color: var(--Dark-and-gray-scale-Darlk, #0A0A0A);
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-inline: 16px;
    margin-top: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
}
.ik-input--invalid{
border-bottom: 4px solid var(--Alerts-Error, #B3261E);
background: #EFD0D1;
border-radius: 4px 4px 0px 0px;
}`
export default inputStyle;