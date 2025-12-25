type User = {
    name: "john",
    show: () => void;
}

type Customer = {
    name: "mary",
    buy: () => void;
}

type Sale = User | Customer;

function handleSale(sale: Sale) {
    if (sale.name === 'mary') {
        sale.buy();
    } else {
        sale.show();
    }
} 