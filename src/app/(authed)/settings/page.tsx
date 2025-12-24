import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline">Settings</h2>
        <p className="text-muted-foreground">
          Configure application settings and integrations.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 border-dashed">
        <Settings className="w-16 h-16 text-muted-foreground mb-4 animate-spin-slow" />
        <h3 className="text-xl font-semibold">Settings Module Coming Soon</h3>
        <p className="text-muted-foreground mt-2">
          Here you will be able to manage user roles, billing categories, and system preferences.
        </p>
      </Card>
    </div>
  );
}
