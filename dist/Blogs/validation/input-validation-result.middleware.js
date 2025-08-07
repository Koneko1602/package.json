"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationResultMiddleware = void 0;
const express_validator_1 = require("express-validator");
const inputValidationResultMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorsArray = errors.array();
        // Собираем ошибки по полям: оставляем первую ошибку, но для shortDescription проверяем приоритетное сообщение
        const errorMap = new Map();
        errorsArray.forEach((err) => {
            const field = err.path.trim();
            if (!errorMap.has(field)) {
                errorMap.set(field, { message: err.msg, field });
            }
            else if (field === "shortDescription") {
                // Если уже есть ошибка для shortDescription, и текущее сообщение приоритетное, заменяем
                const prev = errorMap.get(field);
                if (err.msg.includes("Short description must be")) {
                    errorMap.set(field, { message: err.msg, field });
                }
            }
        });
        const uniqueErrors = Array.from(errorMap.values());
        // Сортировка: shortDescription первой, остальные по порядку появления
        uniqueErrors.sort((a, b) => a.field === "shortDescription" ? -1 :
            b.field === "shortDescription" ? 1 :
                0);
        res.status(400).json({ errorsMessages: uniqueErrors });
    }
    else {
        next();
    }
};
exports.inputValidationResultMiddleware = inputValidationResultMiddleware;
