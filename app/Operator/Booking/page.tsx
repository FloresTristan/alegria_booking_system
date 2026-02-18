import BookingRequestsPanel from '@/components/operator/booking/list';
import BookingDetailsCard from '@/components/operator/booking/details';

export default function Page() {
  return (
  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
    <div className="h-[95%] w-[95%] bg-gray-200 flex md:flex-row flex-col gap-5">    
        <div className="h-full w-[65%] bg-gray-200">
            <BookingRequestsPanel />
        </div> 
        <div className="h-full w-[35%] bg-gray-300">
          <div className="h-full w-full bg-gray-200 flex md:flex-col flex-col gap-5">    
            <div className="h-[50%] w-full bg-gray-100">
              <BookingDetailsCard />
            </div> 
            <div className="h-[50%] w-full bg-gray-100">
            </div> 
          </div> 
        </div> 
    </div>
  </div>
  )
}