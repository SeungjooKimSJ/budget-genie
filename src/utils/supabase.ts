import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

// Server Component에서 사용할 Supabase 클라이언트 생성
export const createServerSupabaseClient = () => {
  if (typeof window !== 'undefined') {
    throw new Error('This method should only be called from server components')
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient<Database>(supabaseUrl, supabaseKey)
}

// Client Component에서 사용할 Supabase 클라이언트 생성
export const createClientSupabaseClient = () => {
  return createClientComponentClient<Database>()
}

// 클라이언트 컴포넌트에서는 createClientComponentClient를 직접 사용하세요
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// const supabase = createClientComponentClient()

export type { Database } 