export interface ICategory {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface ICreateCategoryPayload {
  name: string;
  color: string;
  icon: string;
}
