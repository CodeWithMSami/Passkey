alter table passwords enable row level security;

create policy "Users can view their passwords"
on passwords
for select
to authenticated
using (
  auth.uid() = user_id
);


create policy "Users can add their passwords"
on passwords
for insert
to authenticated
with check (
  auth.uid() = user_id
);


create policy "Users can update their passwords"
on passwords
for update
to authenticated
using (
  auth.uid() = user_id
);


create policy "Users can delete their passwords"
on passwords
for delete
to authenticated
using (
  auth.uid() = user_id
);