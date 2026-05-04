export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Feminino' | 'Masculino' | 'Outro';
  complaint: string;
  waitTime: string;
  status: 'Urgente' | 'Normal' | 'Crítico';
  priority: 'Alta' | 'Padrão';
  adherence: number;
}

export interface Student {
  id: string;
  name: string;
  initials: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  students: number;
  workload: string;
  status: 'OTIMIZADO' | 'SOBRECARGA';
  initials: string;
}
