export interface HeaderTitle {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: string;
  id?: string;
  class?: string;
}

export const dummyHeaderTitle: HeaderTitle = {
  level: 'h2',
  value: 'Hola mundo!',
};
