import { useState, useEffect } from "react";
import getAlerts from "../api/getAlerts";

export default function useGetAlerts() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        getAlerts().then(setAlerts);
    }, []);

    return alerts;
}
