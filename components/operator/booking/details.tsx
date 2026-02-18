'use client';

import React from 'react';

export type BookingStatus = 'Reserved' | 'Paid' | 'Processing';

export type Guest = {
  name: string;
  age: number;
  gender: string;
};

export type UploadedFile = {
  id: string;
  name: string;
};

export type Booking = {
  id: string;
  bookingIdLabel?: string;
  scheduleLabel: string;

  representative: {
    name: string;
    age: number;
    gender: string;
    email: string;
    mobile: string;
  };

  otherGuests: Guest[];

  payment: {
    pricePerPerson: number;
    qty: number;
    serviceCharge: number;
    option: string;
  };

  status: BookingStatus;
  uploads: UploadedFile[];
};

function peso(n: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
  }).format(n);
}

const statusDot: Record<BookingStatus, string> = {
  Reserved: 'bg-yellow-300',
  Paid: 'bg-green-500',
  Processing: 'bg-orange-500',
};

export default function BookingDetailsCard({ booking }: { booking?: Booking }) {
  if (!booking) {
    return (
      <div className="h-full min-h-0 w-full rounded-2xl border border-neutral-200 bg-white flex items-center justify-center text-sm text-neutral-500">
        Select a booking from the list.
      </div>
    );
  }

  const subtotal = booking.payment.pricePerPerson * booking.payment.qty;
  const total = subtotal + booking.payment.serviceCharge;

  return (
    <div className="w-full h-full min-h-0 rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-5 pt-5 pb-3 bg-white">
        <div className="flex items-start justify-between gap-3">
          <div className="text-[11px] text-neutral-500">
            Booking Id:{' '}
            <span className="font-medium text-neutral-700">
              {booking.bookingIdLabel ?? booking.id}
            </span>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
            preview printable
          </span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 pb-5">
        <div className="space-y-2 text-[12px] text-neutral-700">
          <Row label="Tour Schedule:" value={<span className="font-semibold text-neutral-900">{booking.scheduleLabel}</span>} />
          <Row label="Representative:" value="" />
        </div>

        <div className="mt-2 space-y-1 text-[12px] text-neutral-700 pl-3">
          <Row label="Name:" value={<span className="font-semibold">{booking.representative.name}</span>} />
          <div className="flex items-center gap-6">
            <RowInline label="Age:" value={booking.representative.age} />
            <RowInline label="Gender:" value={booking.representative.gender} />
          </div>
          <Row label="Email:" value={<span className="font-semibold">{booking.representative.email}</span>} />
          <Row label="Mobile Number:" value={<span className="font-semibold">{booking.representative.mobile}</span>} />
        </div>

        <div className="mt-5 text-[12px] text-neutral-800 font-semibold">Other Guests</div>

        <div className="mt-2 rounded-xl bg-neutral-50 border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-2 px-3 py-2 text-[11px] text-neutral-500 font-medium">
            <div className="col-span-6">Name</div>
            <div className="col-span-2 text-center">Age</div>
            <div className="col-span-4 text-right">Gender</div>
          </div>
          <div className="divide-y divide-neutral-200">
            {booking.otherGuests.map((g, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 px-3 py-2 text-[12px] text-neutral-800">
                <div className="col-span-6 font-semibold truncate">{g.name}</div>
                <div className="col-span-2 text-center">{g.age}</div>
                <div className="col-span-4 text-right">{g.gender}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 text-[12px] text-neutral-800 font-semibold">Payment</div>

        <div className="mt-2 text-[12px] text-neutral-700 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">{`₱${booking.payment.pricePerPerson} x ${booking.payment.qty}`}</span>
            <span className="font-semibold">{peso(subtotal)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">Service charge</span>
            <span className="font-semibold">{peso(booking.payment.serviceCharge)}</span>
          </div>

          <div className="h-px bg-neutral-200" />

          <div className="flex items-center justify-between">
            <span className="font-semibold text-neutral-900">Total</span>
            <span className="font-semibold text-neutral-900">{peso(total)}</span>
          </div>

          <div className="mt-3">
            <span className="text-[12px] text-neutral-600">Payment Option: </span>
            <span className="font-semibold text-neutral-900">{booking.payment.option}</span>
          </div>
        </div>

        <div className="mt-5 text-[12px] text-neutral-800 font-semibold">File Upload</div>

        <div className="mt-2 rounded-xl border border-neutral-200 overflow-hidden">
          {booking.uploads.map((f) => (
            <div key={f.id} className="flex items-center justify-between px-3 py-2 text-[12px]">
              <div className="flex items-center gap-2 text-neutral-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 border border-neutral-200">
                  📄
                </span>
                <span className="font-medium">{f.name}</span>
              </div>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-red-500 hover:bg-red-50"
                type="button"
                aria-label="Delete file"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border-2 border-dashed border-lime-400 bg-lime-50 px-4 py-5">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-4 py-2 text-white text-[12px] font-semibold"
            >
              ⬆️ Browse
            </button>
            <div className="text-[12px] text-neutral-500">Drop a file here</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[12px] text-neutral-700">
            <span className={`h-2 w-2 rounded-full ${statusDot[booking.status]}`} />
            <span className="font-medium">{booking.status}</span>
            <span className="ml-2 text-neutral-400">▾</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-neutral-600">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}

function RowInline({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-neutral-600">{label}</span>
      <span className="font-semibold text-neutral-900">{value}</span>
    </div>
  );
}
