"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import type { Student } from "@/lib/data"
import { ReminderForm } from "./reminder-form"

export const columns: ColumnDef<Student>[] = [
    {
        accessorKey: "studentName",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Student Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
    {
        accessorKey: "parentName",
        header: "Parent Name",
    },
    {
        accessorKey: "amountDue",
        header: ({ column }) => {
          return (
            <div className="text-right">
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Amount Due
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amountDue"))
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount)
       
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            const variant = {
                'Paid': 'default',
                'Overdue': 'destructive',
                'Pending': 'secondary'
            }[status] ?? 'default' as any;
            
            return <Badge variant={variant} className={status === 'Paid' ? 'bg-green-500 hover:bg-green-600' : ''}>{status}</Badge>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const student = row.original
     
          return (
            <ReminderForm student={student}>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(student.parentName)}
                    >
                        Copy Parent Name
                    </DropdownMenuItem>
                    {student.status !== 'Paid' && <DropdownMenuItem asChild>
                        {/* The ReminderForm will render its trigger here, which is a DropdownMenuItem */}
                        <div>Send Reminder</div>
                    </DropdownMenuItem>}
                </DropdownMenuContent>
                </DropdownMenu>
            </ReminderForm>
          )
        },
      },
]
