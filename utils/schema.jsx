import {
    integer,numeric,pgTable, serial, varchar
} from 'drizzle-orm/pg-core'

//budget schema
export const Budgets = pgTable('budgets',{
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    craetedBy: varchar('createdBy').notNull()

})

//income schema
export const Incomes= pgTable('incomes',{
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    craetedBy: varchar('createdBy').notNull()

})

//expenses schema
export const expenses= pgTable('expenses',{
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    budgetId: integer("budgetId").references(() => Budgets.id),
    craetedBy: varchar('createdBy').notNull()

})
