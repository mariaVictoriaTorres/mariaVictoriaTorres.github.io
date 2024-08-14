const modalStyle = `
.ik-modal--show {
    display: block;
}

.ik-modal--hide {
    display: none;
}

.ik-modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.ik-modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--Schemes-On-Primary, #FFF);
    position: relative;
}

.ik-modal__title {
    margin: 6px 16px;
}

.ik-close {
    color: #aaa;
    font-size: 28px;
    position: absolute;
    right: 16px;
    top: 20px;
    cursor: pointer;
}

.ik-close:hover,
.ik-close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
`
export default modalStyle;