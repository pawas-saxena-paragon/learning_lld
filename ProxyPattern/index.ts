import { EmployeeProxy } from "./EmployeeProxy";

const employeeDaoProxy = new EmployeeProxy();

employeeDaoProxy.create("USER", { id: 1, name: "abc", age: 23 });
