import { EmployeeDAO } from "./EmployeeDAO";
import { IEmployeeDAO } from "./EmployeeDAO.interface";
import { EmployeeDO } from "./EmployeeDO";

export class EmployeeProxy implements IEmployeeDAO {
  private employeeDao: EmployeeDAO;

  constructor() {
    this.employeeDao = new EmployeeDAO();
  }

  create(client: string, employee: EmployeeDO): void {
    if (client === "ADMIN") {
      return this.employeeDao.create(client, employee);
    }

    throw new Error("Access Denied");
  }

  delete(client: string, id: number): void {
    if (client === "ADMIN") {
      return this.employeeDao.delete(client, id);
    }

    throw new Error("Access Denied");
  }

  get(client: string, id: number): EmployeeDO {
    if (client === "ADMIN" || client === "USER") {
      return this.employeeDao.get(client, id);
    }
    throw new Error("Access Denied");
  }
}
