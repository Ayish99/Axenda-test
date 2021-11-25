import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    "https://hqkdighuetmsnafbxhzp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzQ0NDM0NSwiZXhwIjoxOTUzMDIwMzQ1fQ.a3T8KILBRUAHqvI4EeJeytKGe1wuvNrYthTFAfFpJ0c"
)