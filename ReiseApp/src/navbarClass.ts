export default class Navbar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open'})
    }
    connectedCallBack() {
        this.render()
    }

    render() {
    this.shadowRoot!.innerHTML = `

    <nav class="navbar">
        <div class="logo">ReiseApp</div>
        <button class="nav-toggle">☰</button>
        <ul class="nav-list hidden"></ul>
        </nav>
    `
    }
}