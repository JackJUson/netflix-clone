import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import { useState } from "react";
import Loader from "./Loader";

function Membership() {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [billingLoading, setBillingLoading] = useState(false);

  const manageSubscription = () => {
    if (subscription) {
      setBillingLoading(true);
    }
  };

  return (
    <div
      className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 
    md:border-x-0 md:border-t md:border-b-0 md:px-0"
    >
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        <button
          disabled={billingLoading || !subscription}
          className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm 
          font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
          onClick={manageSubscription}
        >
          {billingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            "Cancel Membership"
          )}
        </button>
      </div>
    </div>
  );
}
export default Membership;
