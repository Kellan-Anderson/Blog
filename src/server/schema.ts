import { sql } from 'drizzle-orm'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const blog = pgTable('blog', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').defaultNow(),
  content: text('content').notNull()
});