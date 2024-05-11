import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "galerie", "/pages/galerie.html", []),
    new Route("/signin", "connexion", "/pages/auth/signin.html",['disconnected'], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",['disconnected'], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html",[ "client", "admin"]),
    new Route("/editpassword", "Mon compte", "/pages/auth/editpassword.html",[ "client", "admin"]),
    new Route("/allresa", "Vos reservation", "/pages/reservations/allresa.html",['client']),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html",['client']),
    new Route("/menu", "menu", "/pages/menu.html",[]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";