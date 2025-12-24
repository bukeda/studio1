import { PlaceholderImages } from '@/lib/placeholder-images';

export type User = {
  name: string;
  email: string;
  avatar: string;
  role: 'ADMIN' | 'MANAGER' | 'CLERK' | 'USER';
};

export const mockUser: User = {
  name: 'Admin User',
  email: 'admin@junita.com',
  avatar: PlaceholderImages.find(p => p.id === 'user-avatar')?.imageUrl || 'https://picsum.photos/seed/user-avatar/100/100',
  role: 'ADMIN',
};


export type Student = {
    id: string;
    studentName: string;
    parentName: string;
    amountDue: number;
    dueDate: string;
    status: 'Paid' | 'Overdue' | 'Pending';
    whatsappNumber: string;
};

export const studentData: Student[] = [
    { id: '1', studentName: 'Liam Johnson', parentName: 'Olivia Johnson', amountDue: 250.00, dueDate: '2024-07-15', status: 'Overdue', whatsappNumber: '+15551112222' },
    { id: '2', studentName: 'Noah Smith', parentName: 'Emma Smith', amountDue: 150.50, dueDate: '2024-07-20', status: 'Pending', whatsappNumber: '+15553334444' },
    { id: '3', studentName: 'Oliver Williams', parentName: 'Ava Williams', amountDue: 0.00, dueDate: '2024-06-30', status: 'Paid', whatsappNumber: '+15555556666' },
    { id: '4', studentName: 'Elijah Brown', parentName: 'Sophia Brown', amountDue: 450.75, dueDate: '2024-07-10', status: 'Overdue', whatsappNumber: '+15557778888' },
    { id: '5', studentName: 'James Jones', parentName: 'Isabella Jones', amountDue: 0.00, dueDate: '2024-06-25', status: 'Paid', whatsappNumber: '+15559990000' },
    { id: '6', studentName: 'William Garcia', parentName: 'Mia Garcia', amountDue: 175.00, dueDate: '2024-07-25', status: 'Pending', whatsappNumber: '+15552223333' },
    { id: '7', studentName: 'Benjamin Miller', parentName: 'Charlotte Miller', amountDue: 300.00, dueDate: '2024-07-05', status: 'Overdue', whatsappNumber: '+15554445555' },
    { id: '8', studentName: 'Lucas Davis', parentName: 'Amelia Davis', amountDue: 0.00, dueDate: '2024-06-28', status: 'Paid', whatsappNumber: '+15556667777' },
    { id: '9', studentName: 'Henry Rodriguez', parentName: 'Harper Rodriguez', amountDue: 50.25, dueDate: '2024-07-18', status: 'Pending', whatsappNumber: '+15558889999' },
    { id: '10', studentName: 'Theodore Martinez', parentName: 'Evelyn Martinez', amountDue: 550.00, dueDate: '2024-07-01', status: 'Overdue', whatsappNumber: '+15550001111' },
];

export const kpiData = [
    { title: 'Term-over-Term Growth', value: '+12.5%', change: 'positive' },
    { title: 'Collection Velocity (30d)', value: '85.2%', change: 'positive' },
    { title: 'Break-even Ratio', value: '78%', change: 'negative' },
    { title: 'Staff Cost Ratio', value: '45%', change: 'neutral' },
];

export const cashflowData = [
    { month: 'Jan', Inflow: 4000, Outflow: 2400 },
    { month: 'Feb', Inflow: 3000, Outflow: 1398 },
    { month: 'Mar', Inflow: 5000, Outflow: 3800 },
    { month: 'Apr', Inflow: 2780, Outflow: 3908 },
    { month: 'May', Inflow: 1890, Outflow: 4800 },
    { month: 'Jun', Inflow: 2390, Outflow: 3800 },
    { month: 'Jul', Inflow: 4490, Outflow: 4300 },
];

export const revenueEfficiencyData = [
    { name: 'Regular', value: 85, fill: "var(--color-chart-1)" },
    { name: 'Staff', value: 95, fill: "var(--color-chart-2)" },
    { name: 'Community', value: 75, fill: "var(--color-chart-3)" },
    { name: 'Scholarship', value: 100, fill: "var(--color-chart-4)" },
];
