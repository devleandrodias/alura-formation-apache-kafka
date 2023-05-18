export class Order {
  private userId: string;
  private orderId: string;
  private amount: number;

  constructor(userId: string, orderId: string, amount: number) {
    this.userId = userId;
    this.orderId = orderId;
    this.amount = amount;
  }
}
