const config = {
  AppwriteId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  AppwriteName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  AppwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  AppwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  AppwriteCollectionId: String(import.meta.env.VITE_APPPWRITE_COLLECTION_ID),
  AppwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  TinyMceApiKey: String(import.meta.env.VITE_TINY_MCE_API_KEY),
};

export default config;
