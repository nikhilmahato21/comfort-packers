import { useState } from 'react';
import { SERVICES_LIST } from '../data/site';
import { buildWhatsAppLink, buildEnquiryMessage } from '../lib/whatsapp';
import { ArrowRight } from 'lucide-react';

export default function EnquiryForm({ compact = false }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    from: 'Chennai',
    to: '',
    date: '',
    service: '',
    details: '',
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please add your name and phone number so we can call you back.');
      return;
    }
    const msg = buildEnquiryMessage(form);
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <form
      onSubmit={submit}
      className={`bg-white rounded-3xl shadow-card border border-ink/5 ${compact ? 'p-5 lg:p-6' : 'p-6 lg:p-8'}`}
    >
      <div className="mb-5">
        <div className="text-rust text-xs font-bold tracking-[0.25em] uppercase mb-2">
          Quick Enquiry
        </div>
        <h3 className="font-display font-black text-2xl lg:text-3xl leading-tight text-ink">
          Request your Chennai moving callback
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          Share your move details. Our Chennai team replies on WhatsApp within 15 minutes.
        </p>
      </div>

      <div className="space-y-4">
        <Field label="Full Name" required>
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={update('name')}
            className="input"
            required
          />
        </Field>

        <Field label="Phone Number" required>
          <input
            type="tel"
            placeholder="10 digit mobile number"
            value={form.phone}
            onChange={update('phone')}
            pattern="[0-9]{10}"
            className="input"
            required
          />
        </Field>

        <Field label="Email Address">
          <input
            type="email"
            placeholder="Optional email for reply"
            value={form.email}
            onChange={update('email')}
            className="input"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Moving From">
            <input
              type="text"
              placeholder="Example: Chennai"
              value={form.from}
              onChange={update('from')}
              className="input"
            />
          </Field>
          <Field label="Moving To">
            <input
              type="text"
              placeholder="Destination city"
              value={form.to}
              onChange={update('to')}
              className="input"
            />
          </Field>
        </div>

        <Field label="Preferred Date">
          <input
            type="date"
            value={form.date}
            onChange={update('date')}
            className="input"
          />
        </Field>

        <Field label="Service Required">
          <select
            value={form.service}
            onChange={update('service')}
            className="input"
          >
            <option value="">Select service</option>
            {SERVICES_LIST.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Enquiry Details">
          <textarea
            rows="3"
            placeholder="Tell us about your household items, floor level, bike or car model, route or preferred timing."
            value={form.details}
            onChange={update('details')}
            className="input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-rust hover:bg-rustDeep text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-btn transition-colors group"
      >
        Send Enquiry on WhatsApp
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-[11px] text-muted text-center mt-3">
        By submitting you agree to be contacted via WhatsApp / Call about your move.
      </p>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink mb-1.5">
        {label} {required && <span className="text-rust">*</span>}
      </span>
      {children}
      <style>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid rgba(14,27,44,0.12);
          border-radius: 14px;
          background: #FAFAF7;
          font-size: 15px;
          color: #0E1B2C;
          transition: all .15s ease;
          outline: none;
        }
        .input:focus {
          border-color: #0E1B2C;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(255,200,58,0.25);
        }
        .input::placeholder { color: #9CA3AF; }
      `}</style>
    </label>
  );
}
