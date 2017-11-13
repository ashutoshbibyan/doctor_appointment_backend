import { Route, Routes } from "@angular/router";
import { UserSignup } from "./user_signup";
import { LogIn } from "./login";


const userSignup: Route = { path: "user/signup", component: UserSignup };
const userLogin: Route = { path: "user/login", component: LogIn };

export const UserRoutes: Routes = [userSignup, userLogin



];
