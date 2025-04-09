interface PaginatorProps {
  total: number;
  current: number;
  max?: number;
  children: React.ReactNode;
}

export const Paginador = ({total, current, max = 5}:PaginatorProps) => {
  const pages: number[] = [];

}