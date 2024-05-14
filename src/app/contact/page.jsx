import { ContactForm, ContactInfo } from '@/components/contact/client';

export default function ContactPage() {
  return (
    <main className="container px-4 mx-auto lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between lg:w-full">
        <ContactInfo></ContactInfo>

        <ContactForm></ContactForm>
      </div>
    </main>
  );
}