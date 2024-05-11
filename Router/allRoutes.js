import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editpassword", "Mon compte", "/pages/auth/editpassword.html"),
    new Route("/allresa", "Vos reservation", "/pages/reservations/allresa.html"),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html"),
    new Route("/menu", "menu", "/pages/menu.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";