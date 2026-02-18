import React from 'react';

type BookingStatus = 'Reserved' | 'Paid' | 'Processing';

type BookingRow = {
  id: string;
  requestDate: string;
  representative: string;
  schedule: string;
  guests: number;
  total: string;
  status: BookingStatus;
};

const statusStyles: Record<
  BookingStatus,
  { dot: string; pill: string; text: string }
> = {
  Reserved: {
    dot: 'bg-yellow-300',
    pill: 'bg-neutral-100',
    text: 'text-neutral-700',
  },
  Paid: {
    dot: 'bg-green-500',
    pill: 'bg-neutral-100',
    text: 'text-neutral-700',
  },
  Processing: {
    dot: 'bg-orange-500',
    pill: 'bg-neutral-100',
    text: 'text-neutral-700',
  },
};

const sampleRows: BookingRow[] = [
  {
    id: 't22542',
    requestDate: '12/5/25',
    representative: 'Jane Doe',
    schedule: 'Jan 6, 2026  8 AM',
    guests: 5,
    total: '₱1,205',
    status: 'Reserved',
  },
  {
    id: '321521',
    requestDate: '12/5/25',
    representative: 'Juan Dela Cr..',
    schedule: 'Feb 28, 2026  9 AM',
    guests: 7,
    total: '₱1,205',
    status: 'Paid',
  },
  {
    id: 't23215',
    requestDate: '12/5/25',
    representative: 'Robert C',
    schedule: 'Jan 23, 2026  8 AM',
    guests: 13,
    total: '₱1,205',
    status: 'Processing',
  },
  {
    id: 'c66788',
    requestDate: '12/5/25',
    representative: 'Dale Conag..',
    schedule: 'Jan 13, 2026  7 AM',
    guests: 5,
    total: '₱1,205',
    status: 'Processing',
  },
  {
    id: 'a23555',
    requestDate: '12/5/25',
    representative: 'Henry Doe',
    schedule: 'Jan 13, 2026  10 AM',
    guests: 11,
    total: '₱1,205',
    status: 'Paid',
  },
  {
    id: 'z323244',
    requestDate: '12/5/25',
    representative: 'James Doe',
    schedule: 'Jan 13, 2026  9 AM',
    guests: 4,
    total: '₱1,205',
    status: 'Paid',
  },
  {
    id: 'b32565',
    requestDate: '12/5/25',
    representative: 'Wiccard Wic..',
    schedule: 'Jan 6, 2026  10 AM',
    guests: 3,
    total: '₱1,205',
    status: 'Processing',
  },
  {
    id: 'u23435',
    requestDate: '12/5/25',
    representative: 'Marie Anne',
    schedule: 'Jan 8, 2026  11 AM',
    guests: 4,
    total: '₱1,205',
    status: 'Reserved',
  },
  {
    id: 'g21233',
    requestDate: '12/5/25',
    representative: 'Tim Foster',
    schedule: 'Jan 9, 2026  3 PM',
    guests: 18,
    total: '₱1,205',
    status: 'Reserved',
  },
  {
    id: 'r55549',
    requestDate: '12/5/25',
    representative: 'Jane Foster',
    schedule: 'Jan 7, 2026  4 PM',
    guests: 4,
    total: '₱1,205',
    status: 'Processing',
  },
];

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function BookingRequestsPanel() { 
  const newBookings24h = 12;
  const totalRequests = 30;

  return (
    <div className="w-full max-w-5xl">
      <div className="rounded-xl border border-neutral-200 bg-white px-4 py-4 sm:px-6 sm:py-4">

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="text-lg font-semibold text-neutral-900">
            Booking Requests
          </div>


          <div className="w-full md:flex-1 md:flex md:justify-end md:px-20">
            <div className="flex w-full flex-col items-center gap-4 sm:gap-6 md:w-auto md:flex-row md:gap-20">

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 sm:text-4xl">
                  {newBookings24h}
                </div>
                <div className="text-base font-medium text-gray-900 sm:text-xl">
                  New Bookings last 24 hours
                </div>
              </div>

              <div className="h-px w-full bg-gray-200 md:h-16 md:w-px md:bg-gray-400" />

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 sm:text-4xl">
                  {totalRequests}
                </div>
                <div className="text-base font-medium text-gray-900 sm:text-xl">
                  Total booking requests
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
        <div className="px-3 pb-4 pt-3">
          <div className="grid grid-cols-7 gap-3 text-[13px] font-semibold text-gray-900">
            <div className="col-span-1">Booking Id</div>
            <div className="col-span-1">Request Date</div>
            <div className="col-span-1">Representative</div>
            <div className="col-span-1">Schedule</div>
            <div className="col-span-1 text-center">No. of Guests</div>
            <div className="col-span-1">Total</div>
            <div className="col-span-1">Status</div>
          </div>
        </div>
         <div className="space-y-3">
          {sampleRows.map((row) => {
            const s = statusStyles[row.status];
            return (
              <div
                key={row.id}
                className="rounded-xl bg-neutral-100 px-4 py-3 "
              >
                <div className="grid grid-cols-7 items-center gap-3 text-[13px] text-neutral-800">
                  <div className="col-span-1 truncate">{row.id}</div>

                  <div className="col-span-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-7 w-px bg-neutral-300" />
                      <span>{row.requestDate}</span>
                    </div>
                  </div>

                  <div className="col-span-1 truncate">
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-7 w-px bg-neutral-300" />
                      <span className="truncate">{row.representative}</span>
                    </div>
                  </div>

                  <div className="col-span-1 truncate">
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-7 w-px bg-neutral-300" />
                      <span className="truncate">{row.schedule}</span>
                    </div>
                  </div>

                  <div className="col-span-1 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <span className="inline-block h-7 w-px bg-neutral-300" />
                      <span>{row.guests}</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-7 w-px bg-neutral-300" />
                      <span>{row.total}</span>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex items-center justify-between">
                      <div
                        className={[
                          'inline-flex items-center gap-2 rounded-full px-3 py-1',
                          s.pill,
                        ].join(' ')}
                      >
                        <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                        <span className={`text-[12px] ${s.text}`}>
                          {row.status}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200"
                        aria-label="Row actions"
                      >
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
    </div>
  );
}
