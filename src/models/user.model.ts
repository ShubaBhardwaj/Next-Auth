import {
  pgTable,
  varchar,
  boolean,
  uuid,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

import { InferSelectModel, InferInsertModel } from "drizzle-orm";


export const users = pgTable("users", {
    id: uuid('id').primaryKey().defaultRandom(),

    firstName: varchar('first_name', { length: 45 }).notNull(),
    lastName: varchar('last_name', { length: 45 }),

    email: varchar('email', { length: 322 }).notNull().unique(),

    password: varchar('password', { length: 66 }),
    salt: text('salt'),

    isverified: boolean('is_verified').default(false).notNull(),

    verificationCode: varchar('verification_code', { length: 6 }),
    verificationCodeExpiresAt: timestamp('verification_code_expires_at'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});


export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;