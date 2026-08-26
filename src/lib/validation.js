// Client-side validation. This mirrors — but does not replace — server-side
// validation in the backend, per the brief's requirement for both layers.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts Indian numbers with optional +91, spaces, or hyphens, 10-digit local numbers.
const PHONE_RE = /^(\+91[\s-]?)?[6-9]\d{9}$/;

export function validateLeadForm(values) {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  if (values.company && values.company.trim().length > 150) {
    errors.company = "Company name must be under 150 characters.";
  }

  if (!values.email?.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone?.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_RE.test(values.phone.trim().replace(/[\s-]/g, ""))) {
    errors.phone = "Please enter a valid 10-digit Indian phone number.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message?.trim()) {
    errors.message = "Please add a short message about your requirement.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a bit more detail (at least 10 characters).";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Message must be under 2000 characters.";
  }

  return errors;
}
