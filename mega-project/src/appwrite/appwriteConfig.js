import { Client, Databases, Query, Storage, ID } from "appwrite";
import config from "../config/config";

export class Services {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.AppwriteEndpoint)
      .setProject(config.AppwriteId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return this.databases.createDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        };
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deletePost(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
    }
  }

  // Files upload
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.AppwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(config.AppwriteBucketId, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(config.AppwriteBucketId, fileID);
  }
}

const services = new Services();

export default services;
