import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// https://appwrite.io/docs/products/auth/email-password


//this is coustomized documentation for future proved code
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            //first field will be id
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                //call another method
                return this.login(email, password);
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    //For Login
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite servce :: getCurrentUser():: ",error)
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Log out Error:- ", error);
        }
    }
}

const authService = new AuthService();

export default authService;