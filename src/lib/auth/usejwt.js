import useJwt from "@/core/auth/useJwt";
import Axiosinstance from "@/core/auth/Axiosinstance";

const { jwt } = useJwt(Axiosinstance, {});
export default jwt;
