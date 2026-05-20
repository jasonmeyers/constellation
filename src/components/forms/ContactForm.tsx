import { useState } from "react";
import { Send } from "lucide-react";
import { Button, Input, Textarea } from "../ui";
import { type ContactForm as ContactFormType } from "../../types";
import { useAnalytics } from "../../hooks/useAnalytics";

interface ContactFormProps {
  onSubmit?: (data: ContactFormType) => void;
}

const SUBMITTED_COOKIE = "contact_form_submitted";

const getCookie = (name: string) =>
  document.cookie.split("; ").some((c) => c.startsWith(name + "="));

const setSubmittedCookie = () => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${SUBMITTED_COOKIE}=1; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const { trackFormSubmission } = useAnalytics();
  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(() =>
    getCookie(SUBMITTED_COOKIE),
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "constellation-contact",
            ...formData,
          }).toString(),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }

      if (onSubmit) {
        onSubmit(formData);
      }

      setSubmittedCookie();
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      trackFormSubmission("contact_form", true);
    } catch (error) {
      console.error("Error submitting form:", error);
      trackFormSubmission("contact_form", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      name="constellation-contact"
      data-netlify="true"
      method="POST">
      <input type="hidden" name="form-name" value="constellation-contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What's this about?"
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        placeholder="Tell us about your project, goals, or how we can help..."
      />

      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
      </Button>
    </form>
  );
};
