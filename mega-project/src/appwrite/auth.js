import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class Authentication {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.AppwriteEndpoint)
      .setProject(config.AppwriteId);
    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (userAccount) {
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(email, password) {
    try {
      const loggedIn = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      return loggedIn;
    } catch (error) {
      throw new Error(error);
    }
  }

  async isLoggedIn() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

  async loggedOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: loggedOut :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }
};

const authentication = new Authentication();
export default authentication;
