import Address from "./Address";

export default interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}