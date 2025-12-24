'use server';

import { z } from 'zod';
import { generateBillingReminder, type BillingReminderInput } from '@/ai/flows/automated-billing-reminders';

const formSchema = z.object({
  studentName: z.string(),
  parentName: z.string(),
  amountDue: z.number(),
  dueDate: z.string(),
  whatsappNumber: z.string(),
});

export async function sendBillingReminder(
  data: BillingReminderInput
) {
  'use server';
  try {
    const validatedData = formSchema.parse(data);
    
    // Call the Genkit flow
    const result = await generateBillingReminder(validatedData);
    
    console.log('AI-generated reminder:', result.message);

    return { success: true, message: `Reminder sent to ${validatedData.parentName} successfully.` };
  } catch (error) {
    console.error('Failed to send billing reminder:', error);
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid data provided.' };
    }
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
