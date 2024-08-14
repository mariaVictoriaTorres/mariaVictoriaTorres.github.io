const alertStyle = `
.ik-alert {
    max-width: 380px;
    float: right;
    display: flex;
    height: auto;
    padding: 16px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 4px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
}

.ik-alert__header {
    display: flex;
    gap: 8px;
}

.ik-alert__border--success {
    border-left: 8px solid #328F45;
    background: #DAEEDF;
}

.ik-alert__border--error {
    border-left: 8px solid #B3261E;
    background: #EFD0D1;
    ;
}

.ik-alert__border--warning {
    border-left: 8px solid #FE9800;
    background: #FFF8C6;
}

.ik-alert__border--info {
    border-left: 8px solid #004173;
    background: #D7EAF8;
}

.ik-alert__title {
    align-content: center;
}

.ik-alert__icon {
    width: 24px;
}`
export default alertStyle;