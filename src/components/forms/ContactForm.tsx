import { useState } from "react";
import { Send, CheckCircle, Mail, Phone } from "lucide-react";
import { Button, Input, Textarea } from "../ui";
import { type ContactForm as ContactFormType } from "../../types";
import { useAnalytics } from "../../hooks/useAnalytics";

const COOKIE_NAME = "contact_form_submitted";

const hasSubmittedCookie = () =>
  document.cookie.split("; ").some((c) => c.startsWith(COOKIE_NAME + "="));

const writeSubmittedCookie = () => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_NAME}=1; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

const ThankYou = () => (
  <div className="text-center py-12 space-y-6">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
      <CheckCircle className="w-8 h-8 text-green-600" />
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
      <p className="text-gray-600">
        Your message has been sent. We'll get back to you within 24 hours.
      </p>
    </div>
    <div className="pt-4 space-y-3 text-sm text-gray-600">
      <p className="font-medium text-gray-800">Prefer to reach us directly?</p>
      <a
        href="mailto:constellationsonoma@gmail.com"
        className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
        <Mail className="w-4 h-4" />
        constellationsonoma@gmail.com
      </a>
      <a
        href="tel:+17079137818"
        className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
        <Phone className="w-4 h-4" />
        +1 (707) 913-7818
      </a>
    </div>
  </div>
);

export const ContactForm = () => {
  const { trackFormSubmission } = useAnalytics();
  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(() => hasSubmittedCookie());
  const [error, setError] = useState<string | null>(null);

  if (isSubmitted) {
    return <ThankYou />;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      writeSubmittedCookie();
      setIsSubmitted(true);
      trackFormSubmission("contact_form", true);
    } catch (err) {
      setError(
        `Something went wrong. ${err} Please try again or email us directly.`,
      );
      trackFormSubmission("contact_form", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      name="contact"
      data-netlify="true"
      method="POST">
      <input type="hidden" name="form-name" value="contact" />

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Jane Q. Public"
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
        value={formData.subject ?? ""}
        onChange={handleChange}
        placeholder="What problem can we help you solve?"
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
