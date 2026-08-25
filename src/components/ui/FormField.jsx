export default function FormField({
  id,
  label,
  type = "text",
  as = "input",
  required = false,
  error,
  hint,
  options,
  ...rest
}) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;

  const fieldClasses = `w-full rounded-card border bg-paper px-4 py-2.5 text-sm text-ink-text placeholder:text-slate/60 transition-colors focus:border-brass ${
    error ? "border-red-400" : "border-ink/15"
  }`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} {required && <span aria-hidden="true" className="text-brass-dark">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${fieldClasses} mt-1.5 min-h-[120px] resize-y`}
          {...rest}
        />
      ) : as === "select" ? (
        <select
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${fieldClasses} mt-1.5`}
          {...rest}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${fieldClasses} mt-1.5`}
          {...rest}
        />
      )}

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
