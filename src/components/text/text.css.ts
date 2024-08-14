const textStyle = `
@font-face {
    font-family: 'Montserrat-bold';
    src: url('/src/assets/fonts/Montserrat-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-bold-italic';
    src: url('/src/assets/fonts/Montserrat-BoldItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-extra-bold';
    src: url('/src/assets/fonts/Montserrat-ExtraBold.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-extra-bold-italic';
    src: url('/src/assets/fonts/Montserrat-ExtraBoldItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-light';
    src: url('/src/assets/fonts/Montserrat-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-light-italic';
    src: url('/src/assets/fonts/Montserrat-LightItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-medium';
    src: url('/src/assets/fonts/Montserrat-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-medium-italic';
    src: url('/src/assets/fonts/Montserrat-MediumItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-regular';
    src: url('/src/assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-semi-bold';
    src: url('/src/assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
}

@font-face {
    font-family: 'Montserrat-semi-bold-italic';
    src: url('/src/assets/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype');
}

.ik-text--bold {
    font-family: Montserrat-bold, sans-serif;
}

.ik-text--bold-italic {
    font-family: Montserrat-bold-italic, sans-serif;
}

.ik-text--extra-bold {
    font-family: Montserrat-extra-bold, sans-serif;
}

.ik-text--extra-bold-italic {
    font-family: Montserrat-extra-bold-italic, sans-serif;
}

.ik-text-light {
    font-family: Montserrat-light, sans-serif;
}

.ik-text--light-italic {
    font-family: Montserrat-light-italic, sans-serif;
}

.ik-text--medium {
    font-family: Montserrat-medium, sans-serif;
}

.ik-text--medium-italic {
    font-family: Montserrat-medium-italic, sans-serif;
}

.ik-text--regular {
    font-family: Montserrat-regular, sans-serif;
}

.ik-text--semi-bold {
    font-family: Montserrat-semi-bold, sans-serif;
}

.ik-text--semi-bold-italic {
    font-family: Montserrat-semi-bold-italic, sans-serif;
}

.ik-text {
    line-height: normal;
    letter-spacing: 0.5px;
    margin-block-end: 0px;
    margin-block-start: 0px;
    display: inline;
}

.ik-title {
    line-height: 120%;
    margin-block-end: 0px;
    margin-block-start: 0px;
    letter-spacing: 0.5px;
}

.ik-text--primary {
    color: #512bda;
}

.ik-text--secondary {
    color: #05cfd6;
}

.ik-text--tertiary {
    color: #30fc99;
}

.ik-text--black {
    color: #0b041f;
}

.ik-text--white {
    color: #ffffff;
}

.ik-text--dark-grey {
    color: #0a0a0a;
}

.ik-text--medium-grey {
    color: #1a1a1a;
}

.ik-text--light-grey {
    color: #949494;
}

.ik-text--grey {
    color: #3a3a3a;
}

.ik-title--xxl {
    font-size: 56px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 48px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 20px;
    }

    /* phone S */
    @media (max-width: 375px) {
        font-size: 18px;
    }
}

.ik-title--xl {
    font-size: 48px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 40px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 18px;
    }

    /* phone S */
    @media (max-width: 375px) {
        font-size: 16px;
    }
}

.ik-title--l {
    font-size: 40px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 32px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 16px;
    }
}

.ik-title--m {
    font-size: 32px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 24px;
    }
}

.ik-title--s {
    font-size: 24px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 20px;
    }
}

.ik-title--xs {
    font-size: 20px;
}

.ik-text--xl {
    font-size: 20px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 18px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 16px;
    }
}

.ik-text--l {
    font-size: 18px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 16px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 14px;
    }
}

.ik-text--m {
    font-size: 16px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 14px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 12px;
    }
}

.ik-text--s {
    font-size: 14px;

    /* tablet */
    @media (max-width: 768px) {
        font-size: 12px;
    }

    /* phone L */
    @media (max-width: 430px) {
        font-size: 10px;
    }
}`
export default textStyle;