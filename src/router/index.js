import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import AboutMovieView from "../views/AboutMovieView.vue";
import ActorsView from "../views/ActorsView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/movies",
            name: "movies",
            component: MoviesView,
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: AboutMovieView,
        },
        {
            path: "/actors",
            name: "actors",
            component: ActorsView,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileView,
        },
    ],
});

export default router;
