export interface ICategory {
  id: string;
  name: string;
  colorValue: string;
  iconKey: string;
  undeletable?: boolean;
}

export interface ICreateCategoryPayload {
  name: string;
  colorValue: string;
  iconKey: string;
}
