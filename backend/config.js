import dotenv from "dotenv"
dotenv.config()
export const PORT=process.env.PORT;

export const mongoDBURL=`mongodb+srv://swaroop6291:${process.env.MONGO_DB_PASSWORD}@mybookstore.f854fb9.mongodb.net/?retryWrites=true&w=majority&appName=MyBookStore`