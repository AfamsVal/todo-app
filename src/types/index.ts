export type AppDispatchProps<T = any> = {
  type: string;
  payload?: T;
};

export interface Itodos {
  loading: boolean;
  todos: { id: string; title: string; isCompleted: false }[];
  error: string;
  success: boolean;
  del_loading?: boolean;
  del_error?: string;
}

export interface Itodo {
  title: string;
  id: string;
  isCompleted: boolean;
}
