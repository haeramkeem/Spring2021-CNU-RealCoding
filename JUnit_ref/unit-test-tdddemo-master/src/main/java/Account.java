public class Account {
    private int balance;

    public int getBalnce() {
        return this.balance;
    }

    public void deposit(int money) {
        this.balance += money;
    }

    public int withdraw(int money) {
        if(this.balance < money){
            return this.balance;
        }
        return this.balance -= money;
    }
}
