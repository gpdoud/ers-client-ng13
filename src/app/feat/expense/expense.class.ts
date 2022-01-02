export class Expense {
    id: number = 0;
    description: string = "";
    payee: string = "";
    totalExpenses: number = 0;
    totalReimbursed: number = 0;
    locked: boolean = false;
    active?: boolean = true;
    created?: string = "";
    updated?: string = "";
}