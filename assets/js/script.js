import { cards } from "./cards.js";
import { Icones } from "./icones/Icones.js";
import { footer } from "./footer.js";

window.onload = () => {
    const animaCards = new cards();
    const animaIcones = new Icones();
    const animafooter = new footer();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
    animaIcones.animaIcones();
    animafooter.effectOnda();
}

