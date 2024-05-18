interface UserSubscription {
  premium: boolean;
  startDate: Date;
  endDate: Date;
  // Add more properties relevant to the subscription here
}

class Subscription implements UserSubscription {
  premium: boolean;
  startDate: Date;
  endDate: Date;

  constructor(premium: boolean, startDate: Date, endDate: Date) {
    this.premium = premium;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  // Method to check if the subscription is currently active
  isActive(): boolean {
    const currentDate = new Date();
    return currentDate >= this.startDate && currentDate <= this.endDate;
  }
}

// Example usage:
const userSubscription = new Subscription(true, new Date('2024-01-01'), new Date('2024-12-31'));

console.log(`Is the user's subscription active? ${userSubscription.isActive()}`);
