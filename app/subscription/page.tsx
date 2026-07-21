import { plans } from "@/index/constant";

export const metadata = {
  title: "Membership Plans | Ghar Aarogyam",
  description: "Choose the membership plan that works best for you and your family. No hidden fees. Cancel anytime.",
};

export default function Subscription() {
  return (
    <main className="pt-[100px] min-h-screen bg-white">
      {/* Hero */}
      <section className="py-8 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-5">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF9800] text-white text-xs font-bold tracking-widest uppercase mb-4">
            MEMBERSHIP PLANS
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 text-[#2B56A0]">Join the Program</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you and your family. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Subscription Table & T&C without boxes */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          {/* Flat Table (No rounded box container, no box shadows) */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-2 border-black border-collapse text-black text-center min-w-[750px]">
              {/* Header Row */}
              <thead>
                <tr className="bg-[#FFB800] border-b-2 border-black divide-x-2 divide-black text-lg md:text-xl font-bold">
                  {plans.map((p) => (
                    <th key={p.label} className="py-3 px-3 border-r-2 border-black last:border-r-0 font-bold">
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* Price, Sessions & Validity Row */}
                <tr className="bg-white border-b-2 border-black divide-x-2 divide-black">
                  {plans.map((p) => (
                    <td key={p.label} className="py-5 px-3 border-r-2 border-black last:border-r-0 align-top">
                      <div className="text-3xl font-black text-black mb-1">{p.price}</div>
                      <div className="font-bold text-base text-gray-900 mb-1">{p.sessions}</div>
                      {p.priceNote && (
                        <div className="font-bold text-sm text-gray-800 mb-1">{p.priceNote}</div>
                      )}
                      <div className="text-sm font-medium text-gray-800 mt-2">{p.validity}</div>
                    </td>
                  ))}
                </tr>

                {/* Services Row */}
                <tr className="bg-[#8CC63F] divide-x-2 divide-black text-left">
                  {plans.map((p) => (
                    <td key={p.label} className="p-5 border-r-2 border-black last:border-r-0 align-top font-bold text-sm text-black">
                      <div className="space-y-1.5">
                        {p.services.map((svc) => (
                          <div key={svc}>{svc}</div>
                        ))}
                        {p.chooseOne && (
                          <div className="italic font-normal text-sm mt-2">{p.chooseOne}</div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Unboxed Plain T&C Text */}
          <div className="mt-8 text-black space-y-2 mb-16">
            <h3 className="font-bold text-lg md:text-xl text-black mb-2">T&C</h3>
            <ul className="space-y-1.5 text-sm md:text-base font-normal text-gray-900 leading-relaxed">
              <li>No carry forward of consultation after expiry of the validity</li>
              <li>1 Medical query = 1 session</li>
              <li className="italic text-gray-800">
                e.g. In the same call if you have 2 medical queries that will = 2 session and henceforth
              </li>
              <li>Time dedicated for 1 session = 8-10 minutes only</li>
            </ul>
          </div>

          {/* Simple Steps Below T/C */}
          <div className="mb-16">
            <h3 className="font-bold text-lg md:text-xl text-black mb-8">
              Join The Program - Simple steps as shown below
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                { num: "1", icon: "download", text: "Download and intstall the app from play store" },
                { num: "2", icon: "person_add", text: "Register and make your profile" },
                { num: "3", icon: "checklist", text: "Choose a membership plan" },
                { num: "4", icon: "payments", text: "Make the payment" },
                { num: "5", icon: "verified", text: "Once payment is made, your app will be activated with Membership ID" },
                { num: "6", icon: "favorite", text: "Welcome and start using the Ghar Aarogyam services as per your membrship plan" },
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center gap-2">
                  <div className="font-bold text-base md:text-lg text-black">{s.num}</div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 my-2 shadow-sm">
                    <span className="material-symbols-outlined text-[28px] md:text-[34px]">{s.icon}</span>
                  </div>
                  <p className="text-sm font-normal text-black leading-snug">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Green App Download Banner */}
          <div className="bg-[#8CC63F] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Download the Ghar Aarogyam App</h2>
            <p className="text-white/95 text-sm md:text-base max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              Manage your health journey, get reminders, connect with your coach, and use the panic button — all from your phone.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-colors shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.58-2.93-2.93L3.18 23.76zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.5 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.38 10.3l-2.88-1.66-3.17 3.17 3.17 3.17 2.9-1.67c.83-.48.83-1.26-.02-1.74v.73zM4.17.24l12.6 11.58-2.93 2.93L3.18.28c.3-.04.64.0.99.2l-.0-.24z" />
                </svg>
                Google Play
              </a>
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-colors shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
