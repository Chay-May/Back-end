"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePurchase = exports.baseProduct = exports.baseUser = void 0;
exports.baseUser = [
    {
        id: "um",
        email: "joana@email.com",
        password: "labenu"
    },
    {
        id: "dois",
        email: "joana@email.com",
        password: "labenu"
    },
];
exports.baseProduct = [
    {
        id: "um",
        name: "Uva",
        price: 6,
        category: "frutas"
    },
    {
        id: "dois",
        name: "morango",
        price: 10,
        category: "fruta"
    },
];
exports.basePurchase = [
    {
        userId: "um",
        productId: "um",
        quantity: 2,
        totalPrice: "doze"
    },
    {
        userId: "dois",
        productId: "dois",
        quantity: 2,
        totalPrice: "vinte"
    },
];
//# sourceMappingURL=database.js.map