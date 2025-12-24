import { studentData, type Student } from "@/lib/data";
import { columns } from "@/components/students/columns";
import { DataTable } from "@/components/students/data-table";

async function getStudents(): Promise<Student[]> {
  // In a real app, this would fetch from Firestore.
  return studentData;
}

export default async function StudentsPage() {
  const data = await getStudents();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline">Students Directory</h2>
        <p className="text-muted-foreground">
          Manage student records and send billing reminders.
        </p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
