'use client';

import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { createClientSupabaseClient } from '@/utils/supabase';
import type { Database } from '@/types/supabase';
import { format, startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';
import { useRouter } from 'next/navigation';

type Expense = Database['public']['Tables']['expenses']['Row'];

export default function DashboardPage() {
  const { session, signOut } = useAuth();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!session) router.replace('/login');
  }, [session, router]);

  const fetchExpenses = useCallback(async () => {
    if (!session?.user?.id) return;

    setIsLoading(true);
    const supabase = createClientSupabaseClient();
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .eq('user_id', session.user.id)
      .gte('date', startOfMonth(selectedDate).toISOString())
      .lte('date', endOfMonth(selectedDate).toISOString())
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching expenses:', error);
    }
    setExpenses(data || []);
    setIsLoading(false);
  }, [selectedDate, session?.user?.id]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const ExpenseCard = ({ expense }: { expense: Expense }) => (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow p-4 
                    hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">
            {expense.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(expense.date), 'MMMM d, yyyy')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {expense.category} • {expense.payment_method}
          </p>
        </div>
        <p className={`font-medium ${
          expense.type === 'income' 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {expense.type === 'income' ? '+' : '-'}${Math.abs(expense.amount).toFixed(2)}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                    transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                      from-blue-100/20 via-transparent to-transparent
                      dark:from-blue-900/20 dark:via-transparent dark:to-transparent
                      animate-pulse-slow" />
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <header className="flex justify-between items-center">
            <h1 
              onClick={() => setSelectedDate(new Date())}
              className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer
                       hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Budget Genie
            </h1>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 border border-rose-300 text-rose-500 rounded-md 
                       hover:bg-rose-50 hover:border-rose-400 hover:text-rose-600 transition-all
                       dark:border-rose-500/50 dark:text-rose-400 
                       dark:hover:bg-rose-500/10 dark:hover:border-rose-400"
            >
              Sign Out
            </button>
          </header>

          <nav className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedDate(date => subMonths(date, 1))}
              className="p-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out
                       hover:bg-gray-200 hover:shadow-sm hover:scale-110
                       active:bg-gray-300 active:scale-95
                       dark:hover:bg-gray-700 dark:active:bg-gray-600
                       text-gray-700 dark:text-gray-300"
            >
              ←
            </button>
            
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              {format(selectedDate, 'MMMM, yyyy')}
            </h2>
            
            <button
              onClick={() => setSelectedDate(date => addMonths(date, 1))}
              className="p-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out
                       hover:bg-gray-200 hover:shadow-sm hover:scale-110
                       active:bg-gray-300 active:scale-95
                       dark:hover:bg-gray-700 dark:active:bg-gray-600
                       text-gray-700 dark:text-gray-300"
            >
              →
            </button>
          </nav>

          {isLoading ? (
            <div className="text-center py-8 text-gray-600 dark:text-gray-400">
              Loading...
            </div>
          ) : expenses.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No expenses recorded for this month
            </div>
          ) : (
            <div className="space-y-4">
              {expenses.map(expense => (
                <ExpenseCard key={expense.id} expense={expense} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 