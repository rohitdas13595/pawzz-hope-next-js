
import { add } from "date-fns";
import { id } from "date-fns/locale";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";






export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}


export enum AppointmentStatus{
  Pending = "pending",
  Confirmed = "confirmed",
  Completed = "completed",
  Cancelled = "cancelled"
}

export  const  Admin = sqliteTable("admin", {
  id: int("id").notNull().primaryKey(),
  email: text("email", { length: 100 }).notNull().unique(),
  password: text("password", { length: 100 }).notNull(),
}) 


export const User =  sqliteTable("user", {
  id: int("id").notNull().primaryKey(),
  name: text("name", { length: 255 }).notNull(),
  email: text("email", { length: 100 }).notNull().unique(),
  password: text("password", { length: 100 }).notNull(),
  phone: text("phone", { length: 100 }).notNull(),
  gender: text("gender", { length: 100 }).notNull(),
  address: text("address", { length: 255 }).notNull(),
  avatar: text("avatar", { length: 255 }).notNull(),
  dob: text("dob", { length: 255 }).notNull(),
  userType: text("userType", { length: 255, enum: ["organization", "reporter"]}).notNull(),
  createdAt: text("created_at", { length: 255 }).notNull().default(new Date().toISOString()),
  updatedAt: text("updated_at", { length: 255 }).notNull().default(new Date().toISOString()).$onUpdateFn(() => new Date().toISOString()),
});





export  const  Organization = sqliteTable("organization", {
  id: int("id").notNull().references(() => User.id).primaryKey(),
  name: text("name", { length: 255 }).notNull(),
  email: text("email", { length: 100 }).notNull().unique(),
  address: text("address", { length: 255 }).notNull(),
  phone: text("phone", { length: 100 }).notNull(),
  createdAt: text("created_at", { length: 255 }).notNull().default(new Date().toISOString()),
  updatedAt: text("updated_at", { length: 255 }).notNull().default(new Date().toISOString()).$onUpdateFn(() => new Date().toISOString()),
});







// const pgGenderEnum = pgEnum("gender_enum", ["male", "female", "other"]);


