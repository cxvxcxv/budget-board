export interface ICategory {
  id: string;
  name: string;
  colorValue: string;
  iconKey: string;
}

export interface ICreateCategoryPayload {
  name: string;
  colorValue: string;
  iconKey: string;
}
