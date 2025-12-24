'use client';

import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import { PlaceholderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, this would trigger the Firebase Google Auth flow.
    // For this prototype, we'll just navigate to the dashboard.
    router.push('/dashboard');
  };

  const heroImage = PlaceholderImages.find(p => p.id === 'login-hero');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="relative grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-lg border shadow-lg md:grid-cols-2">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r md:flex">
          {heroImage && <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />}
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo className="h-8 w-8 mr-2 text-primary-foreground" />
            <span className="font-headline text-2xl font-bold">junita Paytrack</span>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This platform has streamlined our entire financial workflow, saving us countless hours and providing invaluable insights.&rdquo;
              </p>
              <footer className="text-sm">School Administrator</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12 bg-card">
            <Card className="w-full max-w-md border-0 shadow-none">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 md:hidden">
                    <Logo className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Welcome Back</CardTitle>
                <CardDescription>Sign in to access your financial dashboard.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleLogin} className="w-full" size="lg">
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Sign in with Google
                </Button>
              </CardContent>
              <CardFooter className="flex-col text-center text-xs text-muted-foreground">
                <p>By signing in, you agree to our Terms of Service and Privacy Policy.</p>
                <p className="mt-2">&copy; {new Date().getFullYear()} junita Paytrack. All rights reserved.</p>
              </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
