import { EmployeeDO } from "./EmployeeDO";

export interface IEmployeeDAO {
  create(client: string, employee: EmployeeDO): void;
  delete(client: string, id: number): void;
  get(client: string, id: number): EmployeeDO;
}
