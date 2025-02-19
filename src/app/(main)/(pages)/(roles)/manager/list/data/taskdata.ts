export interface Task {
    id: string;
    type: string;
    key: string;
    description: string;
    status:    "todo" | "in-progress" | "completed";
    category: string;
    assignee?: {
      name: string;
      avatar: string;
    };
  }
  
  // Corrected export syntax
  