import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";
export const User =pgTable('users',{
    id: serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email: varchar('email').notNull(),
    imgUrl: varchar('imgUrl'),
    subscription: boolean('subscription').default(false)
})