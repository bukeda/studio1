'use client';

import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { kpiData } from "@/lib/data";
import { CashflowChart } from "@/components/dashboard/cashflow-chart";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight font-headline">Dashboard</h2>
                    <p className="text-muted-foreground">
                        Real-time overview of your school's financial health.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" disabled>
                        <Download className="mr-2" />
                        Save as Image
                    </Button>
                    <Button onClick={handlePrint}>
                        <Printer className="mr-2" />
                        Print Statement
                    </Button>
                </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {kpiData.map((kpi) => (
                    <KpiCard key={kpi.title} {...kpi} />
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Monthly Cashflow Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <CashflowChart />
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Revenue Efficiency by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RevenueChart />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
