import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline">Expenses</h2>
        <p className="text-muted-foreground">
          Track and manage operational expenses.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 border-dashed">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold">Expense Tracking Coming Soon</h3>
        <p className="text-muted-foreground mt-2">
            This module will allow you to log, categorize, and analyze all school expenses.
        </p>
      </Card>
    </div>
  );
}
