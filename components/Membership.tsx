import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import { useState } from "react";
import Loader from "./Loader";

function Membership() {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [billingLoading, setBillingLoading] = useState(false);

  return (
    <div>
      <div>
        <h4>Membership & Billing</h4>
        <button
          disabled={billingLoading || !subscription}
          className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm 
          font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
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
