import express from "express";
import { setupApp } from "./setup-app";
import {SETTINGS} from "./core/settings/settings";
import {runDB} from "./db/Mongo.db";


 // создание приложения
// const app = setupApp(express());
//
// // порт приложения
// const PORT = process.env.PORT || 5002;
//
// // запуск приложения
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });


const bootstrap = async () => {
    const app = express();
    setupApp(app);
    const PORT = SETTINGS.PORT;

    await runDB(SETTINGS.MONGO_URL);

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
    });
    return app;
};

bootstrap();