export const environments = {
  production: true,
  APP_PORT: process.env.MDT_STORAGE_MANAGEMENT_PORT
    ? Number(process.env.MDT_STORAGE_MANAGEMENT_PORT)
    : 8892,
  APP_NAME: "mdt-storage-management"
};
