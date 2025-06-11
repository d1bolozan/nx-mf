export default interface IUserData {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  rights?: { [key: string]: { roles: string[] } };
}
