import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type KpiCardProps = {
    title: string;
    value: string;
    change: 'positive' | 'negative' | 'neutral';
};

export function KpiCard({ title, value, change }: KpiCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={cn("text-2xl font-bold",
                    change === 'positive' && 'text-green-600',
                    change === 'negative' && 'text-red-600',
                    change === 'neutral' && 'text-foreground'
                )}>
                    {value}
                </div>
                <p className="text-xs text-muted-foreground">
                    from last term
                </p>
            </CardContent>
        </Card>
    );
}
