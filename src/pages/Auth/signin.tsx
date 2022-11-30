import { useEffect } from "react";
import { getCookie } from "typescript-cookie";
import { useGlobalContext } from "utils/useGlobalContext";

export default function Signin() {
  const { data } = useGlobalContext();
  useEffect(() => {
    console.log(getCookie("any-key"));
    console.log(data);
  }, [data]);
  return <div>Signin</div>;
}
