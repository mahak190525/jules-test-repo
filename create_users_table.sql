-- Create the public.users table
create table public.users (
  id uuid not null primary key,
  email text,
  full_name text,
  role text default 'user'
);

-- Set up Row Level Security (RLS)
alter table public.users enable row level security;

-- Create a policy to allow users to view their own profile
create policy "Users can view their own profile"
on public.users for select
using ( auth.uid() = id );

-- Create a policy to allow users to update their own profile
create policy "Users can update their own profile"
on public.users for update
using ( auth.uid() = id );
