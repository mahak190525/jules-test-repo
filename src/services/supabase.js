import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtxlqngqmsbgmgidkddz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10eGxxbmdxbXNiZ21naWRrZGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzM2MDIsImV4cCI6MjA3MDE0OTYwMn0.qSkHyXV321jovXR8JUMRkzpcjX00sLu_O4M-0GhxtEE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
