export type Database = {
  public: {
    Tables: {
      expenses: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          type: 'income' | 'expense';
          category: string;
          description: string;
          payment_method: string;
          amount: number;
          created_at?: string;
        };
        Insert: Omit<Database['public']['Tables']['expenses']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['expenses']['Row']>;
      };
    };
  };
}; 