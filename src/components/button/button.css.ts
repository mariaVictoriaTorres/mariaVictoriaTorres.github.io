const buttonStyle = `@font-face {
    font-family: 'Montserrat';
    src: url('/src/assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

.ik-btn-contained {
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--primary, #512BDA);
    border: none;
    color: var(--text, #FFF);
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: 100%;
    cursor: pointer;
}

.ik-btn-contained:hover {
    background: var(--primary-hover, #3F1E9E);
}

.ik-btn-contained:active {
    background: var(--primary-active, #2D1476);
}

.ik-btn-contained:disabled {
    background: var(--primary-disabled, #D1D1D1);
    color: var(--text-disabled, #FFF);
    cursor: not-allowed;
}

.ik-btn-outlined {
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: transparent;
    border: 2px solid var(--primary, #512BDA);
    color: var(--primary, #512BDA);
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: 100%;
    cursor: pointer;
}

.ik-btn-outlined:hover {
    border-color: var(--primary-hover, #3F1E9E);
    color: #3F1E9E;
}

.ik-btn-outlined:active {
    border-color: var(--primary-active, #2D1476);
    color: #2D1476;
}

.ik-btn-outlined:disabled {
    border-color: var(--primary-disabled, #D1D1D1);
    color: var(--text-disabled, #D1D1D1);
    cursor: not-allowed;
}`
export default buttonStyle;