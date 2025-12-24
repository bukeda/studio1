'use server';

/**
 * @fileOverview This file contains a Genkit flow for generating personalized billing reminders for parents via WhatsApp.
 *
 * The flow uses student-specific data and AI to optimize the message content for clarity and effectiveness.
 *
 * @example
 * // Example usage:
 * const reminder = await generateBillingReminder({
 *   studentName: 'Jane Doe',
 *   parentName: 'John Doe',
 *   amountDue: 150.00,
 *   dueDate: '2024-08-15',
 *   whatsappNumber: '+15551234567',
 * });
 *
 * console.log(reminder.message);
 *
 * @exports generateBillingReminder - A function to generate personalized billing reminders.
 * @exports BillingReminderInput - The input type for the generateBillingReminder function.
 * @exports BillingReminderOutput - The output type for the generateBillingReminder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BillingReminderInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  parentName: z.string().describe('The name of the parent.'),
  amountDue: z.number().describe('The amount due for the billing period.'),
  dueDate: z.string().describe('The due date for the payment (YYYY-MM-DD).'),
  whatsappNumber: z
    .string()
    .describe(
      'The parent or guardian WhatsApp number to send the reminder to. Must be a valid phone number with country code.'
    ),
});
export type BillingReminderInput = z.infer<typeof BillingReminderInputSchema>;

const BillingReminderOutputSchema = z.object({
  message: z
    .string()
    .describe(
      'The generated billing reminder message, ready to be sent via WhatsApp.'
    ),
});
export type BillingReminderOutput = z.infer<typeof BillingReminderOutputSchema>;

const billingReminderPrompt = ai.definePrompt({
  name: 'billingReminderPrompt',
  input: {schema: BillingReminderInputSchema},
  output: {schema: BillingReminderOutputSchema},
  prompt: `You are an AI assistant designed to generate personalized billing reminders for parents via WhatsApp. The school administrator will provide data, and you are to formulate clear, friendly, and effective messages. 

  Here is the student-specific data:
  Student Name: {{{studentName}}}
  Parent Name: {{{parentName}}}
  Amount Due: {{{amountDue}}}
  Due Date: {{{dueDate}}}
  WhatsApp Number: {{{whatsappNumber}}}

  Compose a message suitable for sending as a WhatsApp reminder to the parent. The message should include all necessary information, such as student name, amount due, and due date. Optimize the message for clarity, brevity, and a friendly tone. Include instructions for making a payment. Keep it under 160 characters to be SMS-friendly, should it be used for SMS.
  `,
});

const sendWhatsappMessage = ai.defineTool(
  {
    name: 'sendWhatsappMessage',
    description: 'Sends a WhatsApp message to a given phone number with the provided message.',
    inputSchema: z.object({
      phoneNumber: z
        .string()
        .describe(
          'The phone number to send the WhatsApp message to. Must be a valid phone number with country code.'
        ),
      message: z.string().describe('The message to send via WhatsApp.'),
    }),
    outputSchema: z.boolean().describe('Returns true if the message was sent successfully.'),
  },
  async input => {
    // TODO: Implement the actual WhatsApp API integration here.
    // For now, we'll just simulate sending the message.
    console.log(
      `Simulating sending WhatsApp message to ${input.phoneNumber}: ${input.message}`
    );
    return true; // Simulate success
  }
);

const billingReminderFlow = ai.defineFlow(
  {
    name: 'billingReminderFlow',
    inputSchema: BillingReminderInputSchema,
    outputSchema: BillingReminderOutputSchema,
    tools: [sendWhatsappMessage],
  },
  async input => {
    const {output} = await billingReminderPrompt(input);

    // Call the sendWhatsappMessage tool to send the reminder
    await sendWhatsappMessage({
      phoneNumber: input.whatsappNumber,
      message: output!.message,
    });

    return output!;
  }
);

export async function generateBillingReminder(
  input: BillingReminderInput
): Promise<BillingReminderOutput> {
  return billingReminderFlow(input);
}

export type {BillingReminderInput, BillingReminderOutput};
