import { useState, useEffect } from "react";
import getDevPojects from "../api/getDevProjects";

export default function useGetDevProjects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDevPojects().then(setProjects);
        setIsLoading(false);
    }, []);

    return { projects, isLoading };
}
