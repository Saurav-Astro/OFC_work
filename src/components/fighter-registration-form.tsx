"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { weightClasses, divisions } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  weightClass: z.string({ required_error: 'Please select a weight class.' }),
  discipline: z.string({ required_error: 'Please select a discipline.' }),
  message: z.string().optional(),
});

export function FighterRegistrationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this to a server.
    console.log(values);
    toast({
      title: '⚔️ Application Received!',
      description: 'Your fighter application has been submitted. Our team will review and contact you within 48 hours.',
      duration: 5000,
    });
    form.reset();
  }

  return (
    <div className="relative">
      {/* Info Box */}
      <div className="mb-8 p-6 bg-card border-2 border-primary/30 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 cage-pattern-subtle opacity-10" />
        <h3 className="font-headline text-xl font-bold text-primary uppercase mb-3 relative z-10">What We're Looking For</h3>
        <ul className="space-y-2 text-muted-foreground relative z-10">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Proven fight record with documented wins</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Professional training and discipline</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Commitment to the highest standards of sportsmanship</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Willingness to compete at the elite level</span>
          </li>
        </ul>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weightClass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight Class</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a weight class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {weightClasses.map((wc) => (
                      <SelectItem key={wc} value={wc}>
                        {wc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discipline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discipline</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your discipline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {divisions.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your fighting background, record, and ambitions."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center pt-4">
          <Button 
            type="submit" 
            size="lg" 
            className="aggressive-glow font-bold text-lg px-12 strike-animation"
          >
            Submit Fighter Application
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            By submitting, you agree to our fighter terms and conditions
          </p>
        </div>
      </form>
    </Form>
    </div>
  );
}
