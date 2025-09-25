import Navbar from "./navbarClass.ts"
customElements.define("navbar-comp", Navbar)

render()
function render (): void{
const app = document.getElementById('app')
app!.innerHTML = `
<navbar-comp></navbar-comp>
`

}

