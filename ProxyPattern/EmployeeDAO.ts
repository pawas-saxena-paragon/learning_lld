import { IEmployeeDAO } from "./EmployeeDAO.interface";
import { EmployeeDO } from "./EmployeeDO";

type Connection = {
  get: (id: number) => EmployeeDO;
  delete: (id: number) => void;
  create: (emp: EmployeeDO) => void;
};

export class EmployeeDAO implements IEmployeeDAO {
  get(client: string, id: number): EmployeeDO {
    return this.connect(client).get(id);
  }

  create(client: string, employee: EmployeeDO): void {
    return this.connect(client).create(employee);
  }

  delete(client: string, id: number): void {
    return this.connect(client).delete(id);
  }

  private connect(client: string): Connection {
    return {
      get: (id: number) => {
        const emp: EmployeeDO = {
          id,
          name: "jon",
          age: 23,
        };

        return emp;
      },

      create: (emp: EmployeeDO) => {},
      delete: (id: number) => {},
    };
  }
}
