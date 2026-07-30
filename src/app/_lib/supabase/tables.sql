-- Create enum type
create type passkey_category as enum (
  'personal',
  'work',
  'development',
  'finance',
  'social'
);


create table passwords (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references auth.users(id) on delete cascade,

  name text not null,
  username text not null,

  encrypted_password text not null,

  tags text[] default '{}',

  category passkey_category default 'personal',

  url text,

  created_at timestamp with time zone default now(),

  updated_at timestamp with time zone default now()
);


alter table passwords enable row level security;


create policy "Users can view their passwords"
on passwords
for select
using (
  auth.uid() = user_id
);


create policy "Users can add their passwords"
on passwords
for insert
with check (
  auth.uid() = user_id
);


create policy "Users can update their passwords"
on passwords
for update
using (
  auth.uid() = user_id
);


create policy "Users can delete their passwords"
on passwords
for delete
using (
  auth.uid() = user_id
);