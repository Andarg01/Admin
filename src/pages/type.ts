// types.ts

export interface Role {
    id: string;
    name: string;
    description: string;
    permissions: string[];
    default: boolean;
  }
  
  export interface Permission {
    id: string;
    name: string;
    description: string;
  }
  