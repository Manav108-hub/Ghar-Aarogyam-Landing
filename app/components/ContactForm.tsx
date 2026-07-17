"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions/contact";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
          Sending...
        </>
      ) : (
        <>
          <span className="material-symbols-outlined text-[20px]">send</span>
          Send Message
        </>
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-surface-container-lowest p-10 rounded-3xl border border-secondary text-center shadow-md animate-in fade-in zoom-in duration-300 h-full flex flex-col justify-center">
        <span className="material-symbols-outlined text-secondary text-6xl mb-4">check_circle</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Thank You!</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
          Your query has been sent successfully. We will address it shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-surface-variant shadow-md flex flex-col gap-6">
      {state?.error && (
        <div className="bg-error-container/50 text-on-error-container p-4 rounded-xl font-body-sm flex items-start gap-3 border border-error-container">
           <span className="material-symbols-outlined text-error">error</span>
           <p className="mt-0.5">{state.error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full bg-surface-container-low text-on-surface px-4 py-3.5 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline"
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="w-full bg-surface-container-low text-on-surface px-4 py-3.5 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline"
              placeholder="you@example.com"
            />
          </div>
      </div>

      <div>
        <label htmlFor="query" className="block font-label-md text-label-md text-on-surface-variant mb-2">Your Query</label>
        <textarea 
          id="query" 
          name="query" 
          required
          rows={5}
          className="w-full bg-surface-container-low text-on-surface px-4 py-3.5 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-outline"
          placeholder="How can we help you today?"
        ></textarea>
      </div>

      <div className="pt-2 flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}

