import Endpointclass from "@/core/Endpoint/class/main";
export default function Endpoint(
  Axiosinstance,
  apicofigobject,
  axiosInsgql,
  gqlconfig
) {
  const Endpointobject = new Endpointclass(
    Axiosinstance,
    apicofigobject,
    axiosInsgql,
    gqlconfig
  );
  return { Endpointobject };
}
