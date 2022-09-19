import Axiosinstance from "@/core/Endpoint/API/Axiosinstance";
import Axiosinstancegql from "@/core/Endpoint/graphql/Axiosinstance";
import EndpontFunction from "@/core/Endpoint/function/main";
const { Endpointobject } = EndpontFunction(
  Axiosinstance,
  {},
  Axiosinstancegql,
  {}
);
export default Endpointobject;
