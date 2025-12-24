import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline">Billing</h2>
        <p className="text-muted-foreground">
          Manage invoices, payments, and billing cycles.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 border-dashed">
        <CreditCard className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold">Billing Module Coming Soon</h3>
        <p className="text-muted-foreground mt-2">
          This section will contain detailed billing information, invoice generation, and payment history.
        </p>
      </Card>
    </div>
  );
}
