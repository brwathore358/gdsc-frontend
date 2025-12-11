export class CourseCategory {
     id?: number | string; 
  name: string | undefined;                
  description?: string;
  status?: 'active' | 'inactive' | boolean;
  createdAt?: string;
  updatedAt?: string;
}
