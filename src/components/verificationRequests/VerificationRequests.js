import React,{useEffect} from "react"
import VerificationRequestsPage from "../../pages/verificationRequests/VerificationRequestsPage"

const VerificationRequests = ({hide}) => {
    useEffect(() => {
        if(!hide){document.title = "Verification Requests";
        }
      }, []);
    return (
        <VerificationRequestsPage hide={hide}/>
    )
}

export default VerificationRequests