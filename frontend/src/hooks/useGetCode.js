import { useState, useEffect } from "react";
import getCode from "../api/getCode";

export default function useGetCode() {
    const [code, setCode] = useState([]);

    useEffect(() => {
        getCode().then(setCode);
    }, []);

    return code;
}
